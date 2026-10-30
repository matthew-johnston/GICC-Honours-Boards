// GREEN ISLAND CRICKET CLUB - APPLICATION CONTROLLER
(function (window, document) {
  'use strict';

  let virtualBoards = [];
  let currentIndex = 0;
  let isPaused = false;
  let rotationTimer = null;
  let progressAnimFrame = null;
  let rotationStartTime = 0;
  let sheetsDataMap = {};
  let wakeLock = null;

  const stageEl = document.getElementById('board-stage');
  const sublineTitleEl = document.getElementById('board-category-title');
  const pagePillEl = document.getElementById('board-page-pill');
  const footerTitleEl = document.getElementById('footer-category-title');
  const footerCounterEl = document.getElementById('footer-board-counter');
  const progressBarEl = document.getElementById('progress-bar');
  const pauseBadgeEl = document.getElementById('pause-badge');
  const syncStatusEl = document.getElementById('sync-status');

  async function requestWakeLock() {
    if ('wakeLock' in navigator) {
      try {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => { wakeLock = null; });
      } catch (e) {
        console.warn('Wake Lock error:', e);
      }
    }
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && !wakeLock) requestWakeLock();
  });

  function showBoard(index) {
    if (!virtualBoards.length) return;
    currentIndex = (index + virtualBoards.length) % virtualBoards.length;
    const board = virtualBoards[currentIndex];

    // Update centered straight subline header and page pill
    if (sublineTitleEl) sublineTitleEl.textContent = board.categoryName.toUpperCase();
    if (pagePillEl) {
      if (board.totalPages > 1) {
        pagePillEl.textContent = `PAGE ${board.pageNumber} OF ${board.totalPages}`;
        pagePillEl.style.display = 'inline-block';
      } else {
        pagePillEl.style.display = 'none';
      }
    }

    const newBoardEl = document.createElement('div');
    newBoardEl.className = 'board-content-wrapper board-fade-in';
    newBoardEl.innerHTML = window.BoardRenderer.renderBoardHtml(board);

    const oldBoardEl = stageEl.querySelector('.board-content-wrapper');
    if (oldBoardEl) {
      oldBoardEl.classList.remove('board-fade-in');
      oldBoardEl.classList.add('board-fade-out');
      stageEl.appendChild(newBoardEl);
      setTimeout(() => {
        if (oldBoardEl.parentNode === stageEl) stageEl.removeChild(oldBoardEl);
      }, 700);
    } else {
      stageEl.appendChild(newBoardEl);
    }

    if (footerTitleEl) footerTitleEl.textContent = board.categoryName.toUpperCase();
    if (footerCounterEl) {
      footerCounterEl.textContent = `BOARD ${currentIndex + 1} OF ${virtualBoards.length}`;
    }

    resetRotationTimer();
  }

  function nextBoard() { showBoard(currentIndex + 1); }
  function prevBoard() { showBoard(currentIndex - 1); }

  function togglePause() {
    isPaused = !isPaused;
    if (pauseBadgeEl) pauseBadgeEl.classList.toggle('active', isPaused);
    if (isPaused) {
      clearTimeout(rotationTimer);
      cancelAnimationFrame(progressAnimFrame);
    } else {
      resetRotationTimer();
    }
  }

  function resetRotationTimer() {
    clearTimeout(rotationTimer);
    cancelAnimationFrame(progressAnimFrame);
    if (isPaused || virtualBoards.length <= 1) return;

    const interval = (window.BOARD_CONFIG && window.BOARD_CONFIG.rotationIntervalMs) || 15000;
    rotationStartTime = performance.now();

    function updateProgressBar(now) {
      if (isPaused) return;
      const elapsed = now - rotationStartTime;
      const pct = Math.min(100, (elapsed / interval) * 100);
      if (progressBarEl) progressBarEl.style.width = pct + '%';
      if (elapsed < interval) progressAnimFrame = requestAnimationFrame(updateProgressBar);
    }
    progressAnimFrame = requestAnimationFrame(updateProgressBar);
    rotationTimer = setTimeout(nextBoard, interval);
  }

  async function performBackgroundSync() {
    if (syncStatusEl) syncStatusEl.classList.add('syncing');
    try {
      const freshMap = await window.SheetsService.fetchAllSheets();
      sheetsDataMap = freshMap;
      const updatedBoards = window.BoardRenderer.buildVirtualBoards(sheetsDataMap);
      if (updatedBoards.length > 0) {
        virtualBoards = updatedBoards;
        if (currentIndex >= virtualBoards.length) currentIndex = 0;
      }
      if (syncStatusEl) syncStatusEl.classList.remove('syncing');
    } catch (err) {
      console.warn('Sync warning:', err);
      if (syncStatusEl) syncStatusEl.classList.remove('syncing');
    }
  }

  function setupControls() {
    window.addEventListener('keydown', (e) => {
      if (['ArrowRight', 'ArrowDown', 'PageDown'].includes(e.key)) { e.preventDefault(); nextBoard(); }
      else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); prevBoard(); }
      else if ([' ', 'Enter', 'p', 'P', 'MediaPlayPause'].includes(e.key)) { e.preventDefault(); togglePause(); }
    });

    document.addEventListener('click', (e) => {
      if (e.target.closest('#pause-btn') || e.target.closest('.nav-arrow')) return;
      const x = e.clientX, w = window.innerWidth;
      if (x > w * 0.75) nextBoard();
      else if (x < w * 0.25) prevBoard();
      else togglePause();
    });

    const pauseBtn = document.getElementById('pause-btn');
    if (pauseBtn) pauseBtn.addEventListener('click', (e) => { e.stopPropagation(); togglePause(); });
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextBoard(); });
    const prevBtn = document.getElementById('prev-btn');
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevBoard(); });
  }

  async function init() {
    setupControls();
    requestWakeLock();
    const config = window.BOARD_CONFIG || {};
    sheetsDataMap = {};
    (config.tabs || []).forEach(tab => {
      const cached = window.SheetsService.getCachedSheet(tab);
      if (cached) sheetsDataMap[tab.name] = cached;
    });

    virtualBoards = window.BoardRenderer.buildVirtualBoards(sheetsDataMap);

    // Support URL parameters: ?board=1, ?category=Presidents, ?speed=15, ?pause=true
    const params = new URLSearchParams(window.location.search);
    const reqSpeed = parseInt(params.get('speed'), 10);
    const reqCategory = params.get('category');
    const reqBoard = parseInt(params.get('board'), 10);
    const reqPause = params.get('pause');

    if (reqSpeed && reqSpeed > 0) config.rotationIntervalMs = reqSpeed * 1000;
    if (reqPause === 'true' || reqPause === '1') {
      isPaused = true;
      if (pauseBadgeEl) pauseBadgeEl.classList.add('active');
    }

    let startIdx = 0;
    if (reqCategory) {
      const found = virtualBoards.findIndex(b => b.categoryName.toLowerCase() === reqCategory.toLowerCase());
      if (found !== -1) startIdx = found;
    } else if (!isNaN(reqBoard) && reqBoard >= 1 && reqBoard <= virtualBoards.length) {
      startIdx = reqBoard - 1;
    }

    showBoard(startIdx);

    performBackgroundSync();
    setInterval(performBackgroundSync, config.backgroundSyncIntervalMs || 600000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})(window, document);

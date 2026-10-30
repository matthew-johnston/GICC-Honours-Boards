// GREEN ISLAND CRICKET CLUB - APPLICATION CONTROLLER
(function (window, document) {
  'use strict';

  let virtualBoards = [];
  let currentIndex = 0;
  let isPaused = false;
  let rotationTimer = null;
  let sheetsDataMap = {};
  let wakeLock = null;

  const stageEl = document.getElementById('board-stage');
  const sublineTitleEl = document.getElementById('board-category-title');
  const pagePillEl = document.getElementById('board-page-pill');

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

    // Update centered straight subline header and page indicator pill
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

    resetRotationTimer();
  }

  function nextBoard() { showBoard(currentIndex + 1); }
  function prevBoard() { showBoard(currentIndex - 1); }

  function togglePause() {
    isPaused = !isPaused;
    if (isPaused) {
      clearTimeout(rotationTimer);
    } else {
      resetRotationTimer();
    }
  }

  function resetRotationTimer() {
    clearTimeout(rotationTimer);
    if (isPaused || virtualBoards.length <= 1) return;

    const interval = (window.BOARD_CONFIG && window.BOARD_CONFIG.rotationIntervalMs) || 15000;
    rotationTimer = setTimeout(nextBoard, interval);
  }

  async function performBackgroundSync() {
    try {
      const freshMap = await window.SheetsService.fetchAllSheets();
      sheetsDataMap = freshMap;
      const updatedBoards = window.BoardRenderer.buildVirtualBoards(sheetsDataMap);
      if (updatedBoards.length > 0) {
        virtualBoards = updatedBoards;
        if (currentIndex >= virtualBoards.length) currentIndex = 0;
      }
    } catch (err) {
      console.warn('Sync warning:', err);
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
    if (reqPause === 'true' || reqPause === '1') isPaused = true;

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

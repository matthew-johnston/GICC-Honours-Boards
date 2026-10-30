// ========================================================
// GREEN ISLAND CRICKET CLUB - BOARD RENDERING & PAGINATION
// ========================================================

(function (window) {
  'use strict';

  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /**
   * Slice sheet data into virtual boards based on visual columns and capacity.
   * Large boards (Batting Centuries & Bowling Records) span multiple boards.
   */
  function buildVirtualBoards(sheetsMap) {
    const config = window.BOARD_CONFIG || { tabs: [] };
    const virtualBoards = [];

    config.tabs.forEach((tab) => {
      const sheetData = sheetsMap[tab.name] || { items: [] };
      const rawItems = sheetData.items || [];
      const visualColumns = tab.visualColumns || 2;
      const rowsPerColumn = tab.rowsPerColumn || 18;
      const itemsPerPage = visualColumns * rowsPerColumn;

      if (rawItems.length === 0) {
        virtualBoards.push({
          categoryName: tab.name,
          pageNumber: 1,
          totalPages: 1,
          visualColumns: visualColumns,
          rowsPerColumn: rowsPerColumn,
          items: []
        });
        return;
      }

      const totalPages = Math.ceil(rawItems.length / itemsPerPage);

      for (let p = 0; p < totalPages; p++) {
        const pageItems = rawItems.slice(p * itemsPerPage, (p + 1) * itemsPerPage);
        virtualBoards.push({
          categoryName: tab.name,
          pageNumber: p + 1,
          totalPages: totalPages,
          visualColumns: visualColumns,
          rowsPerColumn: rowsPerColumn,
          items: pageItems
        });
      }
    });

    return virtualBoards;
  }

  /**
   * Render an individual row of data ensuring all columns stay together.
   */
  function renderRow(row) {
    if (!row || row.length === 0) return '';
    const colCount = row.length;

    if (colCount === 1) {
      return `
        <div class="board-row cols-1">
          <span class="cell cell-single">${escapeHtml(row[0])}</span>
        </div>`;
    }

    if (colCount === 2) {
      return `
        <div class="board-row cols-2">
          <span class="cell cell-left">${escapeHtml(row[0])}</span>
          <span class="cell cell-right">${escapeHtml(row[1])}</span>
        </div>`;
    }

    if (colCount === 3) {
      return `
        <div class="board-row cols-3">
          <span class="cell cell-c1">${escapeHtml(row[0])}</span>
          <span class="cell cell-c2">${escapeHtml(row[1])}</span>
          <span class="cell cell-c3">${escapeHtml(row[2])}</span>
        </div>`;
    }

    // 4 or more columns: render all cells horizontally together
    const cellsHtml = row
      .map((c, i) => `<span class="cell cell-c${i + 1}">${escapeHtml(c)}</span>`)
      .join('');
    return `<div class="board-row cols-multi">${cellsHtml}</div>`;
  }

  /**
   * Render virtual board content with balanced items across visual columns.
   */
  function renderBoardHtml(board) {
    const colCount = board.visualColumns;
    const items = board.items;

    // Distribute items evenly across the visual columns
    const columnsData = [];
    let itemIdx = 0;
    for (let c = 0; c < colCount; c++) {
      const remainingCols = colCount - c;
      const remainingItems = items.length - itemIdx;
      const countForThisCol = Math.ceil(remainingItems / remainingCols);
      columnsData.push(items.slice(itemIdx, itemIdx + countForThisCol));
      itemIdx += countForThisCol;
    }

    let columnsHtml = '';
    columnsData.forEach((colItems, index) => {
      const rowsHtml = colItems.length > 0
        ? colItems.map(renderRow).join('')
        : '<div class="empty-column-placeholder">&nbsp;</div>';

      columnsHtml += `
        <div class="board-visual-column visual-col-${index + 1}">
          ${rowsHtml}
        </div>`;

      // Insert vertical gold pin-stripe divider between visual columns
      if (index < colCount - 1) {
        columnsHtml += `<div class="pinstripe-divider" aria-hidden="true"></div>`;
      }
    });

    return `
      <div class="board-stage-inner cols-${colCount}">
        <div class="board-columns-grid cols-${colCount}">
          ${columnsHtml}
        </div>
      </div>
    `;
  }

  window.BoardRenderer = {
    buildVirtualBoards,
    renderBoardHtml,
    escapeHtml
  };
})(window);



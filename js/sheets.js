// ========================================================
// GREEN ISLAND CRICKET CLUB - GOOGLE SHEETS DATA PIPELINE
// ========================================================

(function (window) {
  'use strict';

  /**
   * RFC-4180 compliant CSV parser.
   * Handles quoted cells containing commas, escaped quotes, and newlines.
   */
  function parseCSV(text) {
    if (!text || typeof text !== 'string') return [];
    const rows = [];
    let row = [];
    let cell = '';
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      const next = text[i + 1];

      if (ch === '"') {
        if (inQuotes && next === '"') {
          cell += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === ',' && !inQuotes) {
        row.push(cell.trim());
        cell = '';
      } else if ((ch === '\r' || ch === '\n') && !inQuotes) {
        if (ch === '\r' && next === '\n') i++;
        row.push(cell.trim());
        if (row.some(c => c.length > 0)) rows.push(row);
        row = [];
        cell = '';
      } else {
        cell += ch;
      }
    }

    if (cell.length > 0 || row.length > 0) {
      row.push(cell.trim());
      if (row.some(c => c.length > 0)) rows.push(row);
    }
    return rows;
  }

  function sanitizeRow(row) {
    return row.map(cell => {
      if (typeof cell !== 'string') return '';
      let c = cell.trim();
      if (c.startsWith('"') && c.endsWith('"') && c.length >= 2) {
        c = c.slice(1, -1).replace(/""/g, '"').trim();
      }
      return c;
    });
  }

  function getCachedSheet(tabConfig) {
    const key = 'gicc_board_' + tabConfig.name;
    try {
      const cached = localStorage.getItem(key);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && Array.isArray(parsed.items) && parsed.items.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('localStorage read failed:', e);
    }

    if (window.BOARD_CONFIG && window.BOARD_CONFIG.initialData && window.BOARD_CONFIG.initialData[tabConfig.name]) {
      return window.BOARD_CONFIG.initialData[tabConfig.name];
    }
    return null;
  }

  function setCachedSheet(tabName, data) {
    try {
      localStorage.setItem('gicc_board_' + tabName, JSON.stringify(data));
    } catch (e) {
      console.warn('localStorage write failed:', e);
    }
  }

  /**
   * Fetch single sheet tab from Google Sheets.
   * Strips Row 1 (header row describing columns) per requirements.
   */
  async function fetchSheet(tabConfig) {
    const config = window.BOARD_CONFIG || {};
    let url = '';

    if (config.baseCsvUrl && tabConfig.gid) {
      url = `${config.baseCsvUrl}?gid=${tabConfig.gid}&single=true&output=csv&t=${Date.now()}`;
    } else if (config.sheetId) {
      url = `https://docs.google.com/spreadsheets/d/${config.sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tabConfig.name)}&t=${Date.now()}`;
    } else {
      throw new Error(`No URL or Sheet ID configured for: ${tabConfig.name}`);
    }

    const response = await fetch(url, {
      method: 'GET',
      cache: 'no-store',
      headers: { 'Accept': 'text/csv, text/plain, */*' }
    });

    if (!response.ok) throw new Error(`HTTP ${response.status} for "${tabConfig.name}"`);

    const text = await response.text();
    const allRows = parseCSV(text);
    if (allRows.length === 0) throw new Error(`Empty CSV for "${tabConfig.name}"`);

    // Row 0 is the descriptive header (dropped per user requirements)
    const header = sanitizeRow(allRows[0]);
    // Actual data rows
    const items = allRows.slice(1).map(sanitizeRow).filter(r => r.some(c => c.length > 0));

    const sheetData = {
      name: tabConfig.name,
      gid: tabConfig.gid,
      header: header,
      items: items,
      lastFetched: new Date().toISOString()
    };

    setCachedSheet(tabConfig.name, sheetData);
    return sheetData;
  }

  async function fetchAllSheets() {
    const config = window.BOARD_CONFIG || { tabs: [] };
    const results = {};

    const promises = config.tabs.map(async tab => {
      try {
        const live = await fetchSheet(tab);
        results[tab.name] = live;
      } catch (err) {
        console.warn(`Fetch failed for "${tab.name}", using cache/initial:`, err);
        const cached = getCachedSheet(tab);
        results[tab.name] = cached || {
          name: tab.name,
          gid: tab.gid,
          header: [],
          items: [],
          error: err.message
        };
      }
    });

    await Promise.allSettled(promises);
    return results;
  }

  window.SheetsService = {
    parseCSV,
    fetchSheet,
    fetchAllSheets,
    getCachedSheet
  };
})(window);

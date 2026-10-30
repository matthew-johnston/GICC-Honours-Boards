# Green Island Cricket Club - Digital Honours Board

A zero-maintenance, zero-cost digital honours board web application built for **Green Island Cricket Club**, designed to run 24/7 on a Google TV Streamer 4K (or any smart TV browser) and hosted free on **GitHub Pages**.

Backed by a live **Google Sheet**, allowing designated committee members and volunteers to update records anytime with changes automatically syncing to the TV display.

---

## Features

- **Fullscreen Edge-to-Edge Wooden Plaque**: Realistic mahogany timber background with straight, crisp gold-leaf signwriting typography and 3D routed beveled outer framing.
- **Straight Centered Header & Subline**: Features `GREEN ISLAND CRICKET CLUB` with a gold horizontal divider, with the active board name (e.g. `PRESIDENTS`, `LIFE MEMBERS`, `BATTING CENTURIES`) displayed as the subline.
- **Automatic Multi-Board Pagination**: Automatically calculates rows per column and splits large categories (e.g., *Batting Centuries* with 180+ entries and *Bowling Records*) across virtual pages with subtle gold page indicators (`PAGE 1 OF 4`).
- **Balanced Multi-Column Layout**: Dynamically balances entries evenly across visual columns separated by gold pin-stripe lines.
- **15-Second Smooth Rotation**: Cycles automatically every 15 seconds with smooth cross-fade transitions and a subtle gold countdown progress bar.
- **Background Google Sheets Sync**: Silently re-fetches Google Sheets data every 10 minutes in the background without interrupting the active display.
- **Offline & Boot Resilience**: Pre-loaded with club records and caches live data in `localStorage` so the display starts instantly with zero delay and keeps running even if clubhouse Wi-Fi temporarily drops.
- **Google TV Remote Controls**:
  - `Right Arrow` / `Down Arrow`: Jump to next board.
  - `Left Arrow` / `Up Arrow`: Jump to previous board.
  - `Space` / `Enter` / `MediaPlayPause` / `P`: Pause / Resume auto-rotation.
- **Screen Wake Lock**: Uses the Screen Wake Lock API to prevent the TV or kiosk browser from sleeping or dimming.

---

## Google Sheet Configuration

The honours board is connected to the club's published Google Sheet:
- **Published Document**: `2PACX-1vSO7PBDTQKJunZkVZ3PKX5MEBgH1vf7rutZU8xQY4_wcyN1xfrehzkPQfLkbi0efVP7WU6TEeJGeRIG`

### Data Structure Rules
1. **Sheet Tab Name = Honours Board Subline**:
   - `Presidents`
   - `Life Members`
   - `Representatives`
   - `Batting Centuries`
   - `Bowling Records`
   - `Bowling Special Milestones`
2. **Row 1 is Column Descriptions (Ignored)**:
   - Row 1 contains headings (e.g. `Years,Name` or `Season,Player,Scores`). The application automatically discards Row 1 and never renders it on the board.
3. **Columns Go Together**:
   - All columns in a row are kept together on a single horizontal line with aligned tabular sub-columns.

---

## GitHub Pages Deployment

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Green Island Cricket Club Honours Board"
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** > **Branch**, select `main` branch and `/ (root)` folder.
   - Click **Save**.
3. In 1–2 minutes, your honours board will be live at:
   `https://<your-username>.github.io/GICC-Honours-Boards/`

---

## Google TV Streamer 4K Setup (Kiosk Mode)

1. Connect the **Google TV Streamer 4K** to the TV.
2. Open the Google Play Store and install **Fully Kiosk Browser** (or any TV browser).
3. In Fully Kiosk Browser settings:
   - **Start URL**: Enter your GitHub Pages URL (e.g. `https://<your-username>.github.io/GICC-Honours-Boards/`).
   - **Enable Kiosk Mode**: Locks the browser to fullscreen with no address bar or system UI.
   - **Run on Boot**: Turn **ON** so the honours board launches automatically whenever the TV or streamer powers on.
   - **Keep Screen On**: Turn **ON** to prevent sleep/dimming.

---

## URL Parameters (Optional)

You can customize the board behavior by adding query parameters to the URL:
- `?board=3`: Starts on board number 3.
- `?category=Life Members`: Starts directly on the Life Members board.
- `?speed=20`: Changes rotation interval to 20 seconds (default is 15s).
- `?pause=true`: Starts in paused mode.

---

## File Structure

- `index.html`: Clean semantic HTML layout with fullscreen container, header, stage, and footer.
- `css/styles.css`: Fullscreen edge-to-edge layout, beveled frame, rich vertical woodgrain, gold typography, pin-stripe dividers, and cross-fade animations.
- `js/config.js`: Configuration file (sheet tabs, rotation timer, sync timer) and pre-loaded offline data.
- `js/sheets.js`: RFC-4180 CSV parser, live fetcher, Row 1 dropping, and localStorage cache.
- `js/board.js`: Virtual board builder, pagination engine, column balancing, and row formatting.
- `js/app.js`: Rotation controller, background sync, wake lock, and TV remote controls.

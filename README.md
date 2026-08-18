# ⚡ PulseProxy — Resilient Web Ingestion Gateway

**Acdyon Technologies Engineering Frontend Challenge**  
**Track Selected:** Part 2 — The Premium Home Page (`PulseProxy`)

---

## 🌟 Overview

**PulseProxy** is an interactive developer prototype demonstrating resilient web-ingestion strategies, fallback behavior, and pipeline observability. Rather than presenting static screenshots or fake marketing hype, this project combines a clean product interface with a working **Interactive Ingestion Sandbox**.

- **Frontend (`frontend/`)**: React 18 + Vite SPA built with custom HSL CSS tokens, light/dark mode support, Easter Egg CLI HUD, and zero-overflow responsiveness from 390px to 1440px+.
- **Backend (`backend/`)**: Express.js REST service delivering pipeline simulation steps, telemetry data, and waitlist persistence (`waitlist.json`).

---

## 📁 Project Structure

```
.
├── frontend/                  # React + Vite Frontend Application
│   ├── src/
│   │   ├── components/        # Hero, Sandbox, HowItWorks, Architecture, FAQ, etc.
│   │   ├── App.jsx            # Core layout & keyboard event triggers
│   │   ├── index.css          # CSS Variables, Design Tokens & Themes
│   │   └── main.jsx           # Entry point
│   ├── package.json
│   └── vite.config.js         # Dev server & /api proxy setup
│
├── backend/                   # Express.js Telemetry & Simulation API
│   ├── data/
│   │   └── waitlist.json      # Saved waitlist signups
│   ├── index.js               # Express server with /api routes
│   └── package.json
│
├── DECISIONS.md               # 1-Page Technical Rationale & Trade-offs
├── vercel.json                # Vercel Deployment Configuration
├── render.yaml                # Render Deployment Blueprint
└── package.json               # Monorepo root runner scripts
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Running Frontend & Backend

1. **Install Dependencies**:
   ```bash
   npm install
   cd frontend && npm install && cd ..
   cd backend && npm install && cd ..
   ```

2. **Start Backend Server** (Port 5000):
   ```bash
   npm run backend
   ```

3. **Start Frontend Dev Server** (Port 5173, in a separate terminal):
   ```bash
   npm run frontend
   ```

4. Open your browser at **`http://localhost:5173`**.

---

## 🌐 Deployment Instructions

### 1. Deploying Frontend to Vercel / Netlify
1. Connect repository to **Vercel** or **Netlify**.
2. Root Directory: `frontend`
3. Build Command: `npm run build`
4. Output Directory: `dist`

### 2. Deploying Backend to Render / Railway
1. Connect repository to **Render** or **Railway**.
2. Root Directory: `backend`
3. Build Command: `npm install`
4. Start Command: `node index.js`
5. Environment Variable: `PORT=5000`

---

## 📌 Important Prototype Note

The ingestion pipeline is simulated for safety and zero-downtime evaluation. No live third-party accounts or protected platforms are accessed by the demo.

---

## 📄 Design Decisions

For detailed architectural trade-offs and AI usage disclosures, see [`DECISIONS.md`](file:///c:/Users/anshi/Desktop/neha%20acdyon/DECISIONS.md).

---

*"Build it like you mean it." — Acdyon Technologies Engineering*

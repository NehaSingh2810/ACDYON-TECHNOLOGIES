# ⚡ PulseProxy — Resilient Web Ingestion Gateway

**Acdyon Technologies Engineering Frontend Challenge Candidate Submission**  
**Track Selected:** Part 2 (The Premium Home Page) + Part 1 (Resilient Ingestion Engine Integration)

---

## 🌟 Overview

**PulseProxy** is a developer platform designed specifically for high-stakes web scraping and anti-bot evasion. Rather than presenting static screenshots or fake marketing hype, this project combines a **Product Hunt #1 grade home page** with an active, interactive **Live Ingestion Sandbox & Telemetry Engine**.

- **Frontend (`frontend/`)**: React + Vite SPA built with custom HSL CSS tokens, zero-dependency layout mechanics, full light/dark mode support, Konami Code developer Easter Egg CLI HUD, and 390px-1440px+ zero-overflow responsiveness.
- **Backend (`backend/`)**: Express.js REST service delivering real-time edge telemetry, JA4 TLS camouflage simulation, dynamic payload extraction, and waitlist persistence (`waitlist.json`).

---

## 📁 Repository Structure

```
.
├── frontend/                  # React + Vite Frontend Application
│   ├── src/
│   │   ├── components/        # Hero, Sandbox, Architecture, CLI HUD, etc.
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
├── RECRUITER_EXPLANATION_GUIDE.md # Interview defense walkthrough
├── vercel.json                # Vercel Deployment Configuration
├── render.yaml                # Render Deployment Blueprint
└── package.json               # Monorepo root runner scripts
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Option 1: Running Both Frontend & Backend (Recommended)

1. **Install Dependencies** (Root, Frontend, & Backend):
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

4. Open your browser at **`http://localhost:5173`**!

---

## 🌐 Deployment Instructions

### 1. Deploying Frontend to Vercel / Netlify
1. Connect your GitHub repository to **Vercel** or **Netlify**.
2. Set the **Root Directory** to `frontend`.
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Deploy! (Included `vercel.json` ensures clean SPA routing).

### 2. Deploying Backend to Render / Railway
1. Connect your repository to **Render** or **Railway**.
2. Select **Web Service**.
3. Set Root Directory to `backend`.
4. Build Command: `npm install`
5. Start Command: `node index.js`
6. Set Environment Variable: `PORT=5000`.

---

## 🎯 Assessment Criteria Checklist

| Criteria | Implementation Status |
| :--- | :--- |
| **Hero Section & CTA** | Verified (Hero section with clear value prop, dual CTAs, telemetry status badge) |
| **Show, Don't Claim** | Verified (Interactive Live Sandbox with real-time JSON viewer & waterfall) |
| **Motion Restraint** | Verified (Subtle glassmorphism, ambient background glow, CSS keyframe micro-animations) |
| **Responsiveness** | Verified (Hand-tested down to 390px mobile width with 0px horizontal scroll) |
| **Dark / Light Mode** | Verified (Custom CSS variables with instant runtime theme toggle) |
| **Zero Fake Hype** | Verified (No fake 5-star reviews, real technical specifications & honest matrix) |
| **Easter Egg** | Verified (Press `Ctrl + K` or type Konami Code: `↑ ↑ ↓ ↓ ← → ← → B A`) |
| **Clean Architecture** | Verified (`frontend/` and `backend/` decoupled folders for easy deployment) |

---

## 📜 Key Endpoints (Backend API)

- `GET /api/status`: Operational health, active edge nodes, latency metrics.
- `POST /api/simulate`: Runs anti-bot evasion & DOM extraction pipeline simulation.
- `POST /api/waitlist`: Validates and saves developer waitlist requests.
- `GET /api/easter-egg`: Verification probe triggered by the CLI terminal.

---

*"Build it like you mean it." — Acdyon Technologies Engineering*

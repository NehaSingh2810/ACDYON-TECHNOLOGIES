# Technical Decisions & Architectural Rationale (`DECISIONS.md`)

**Candidate Submission for Acdyon Technologies Engineering Assessment**  
**Track Selected:** Part 2 — The Premium Home Page (`PulseProxy` / Resilient Ingestion Gateway)

---

### 1. Why This Product Strategy Over the Obvious Alternative Rejected?

**The Obvious Alternative Rejected:**  
Building a standard marketing landing page filled with static screenshot mockups, generic claims, and invented 5-star user reviews ("10,000+ happy engineers!").

**Why Rejected:**  
Developer tools fail when they rely on hype instead of verifiable mechanics. Technical evaluators immediately recognize fake testimonials and static placeholders.

**Chosen Strategy:**  
I engineered **PulseProxy** as an interactive developer prototype. Instead of static PNGs, evaluators can interact directly with a working pipeline sandbox backed by a live Express.js service. Evaluators can toggle TLS camouflage, stealth browser profiles, and semantic AST fallbacks in real-time, observing the step-by-step execution waterfall, latency jitter, and structured JSON output. This demonstrates product taste and engineering understanding while satisfying the 3-second evaluation criteria.

---

### 2. One Trade-Off Made Under the Time Limit, & What I’d Do with a Real Week

* **The Time-Constrained Trade-Off:**  
  In the interactive sandbox, the backend simulates edge network hops and JA4 cipher negotiation over deterministic response envelopes rather than executing live residential proxy tunneling on third-party websites. This guarantees the demo is instantaneous (<350ms), resilient to zero-downtime evaluation, and eliminates third-party IP ban risks during recruitment reviews.

* **What I Would Build with a Full Week:**  
  1. **Live Headless AST Diffing Visualizer:** Embed an in-browser DOM tree diffing engine so evaluators can paste raw HTML snippets and visually watch the fallback algorithm reconstruct broken CSS selectors in real-time.
  2. **Automated JA4 Profiler:** A browser extension that captures live client handshake packets and exports PulseProxy configuration headers in 1 click.
  3. **Controlled Live Ingestion Pipeline:** Connect the sandbox interface to a live cluster querying public job-board RSS feeds end-to-end.

---

### 3. Where Did You Use AI Tools, & What Did You Personally Verify or Change Afterward?

* **Where AI Was Leveraged:**  
  AI was used as an accelerator for baseline React component scaffolding and CSS design variable layout tokens.

* **What I Personally Verified, Refined, and Architected:**  
  1. **Strict Honesty & Zero-Fake-Hype Policy:** Grounded all product copy to represent an honest interactive prototype. Removed all fabricated customer logos, fake metrics, and WAF bypass numbers.
  2. **Theme & Spacing Micro-Polish:** Fine-tuned the custom CSS variable token system (`--bg-glass`, HSL color gamuts, glassmorphic backdrop filters) for seamless dark and light mode switching.
  3. **Viewport Responsiveness Guardrails:** Hand-tested flexbox/grid layout constraints at both **390px (mobile)** and **1440px (desktop)** to guarantee **0px horizontal scroll** and clean ergonomics across device sizes.
  4. **Easter Egg Architecture:** Hand-crafted the Konami code sequence (`↑ ↑ ↓ ↓ ← → ← → B A`) and keydown event listener in `App.jsx` for the secret debug CLI HUD.

---

*"Build it like you mean it." — Acdyon Technologies Engineering*

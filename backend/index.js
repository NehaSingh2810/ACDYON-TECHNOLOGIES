import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Ensure data folder exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const waitlistFile = path.join(dataDir, 'waitlist.json');
if (!fs.existsSync(waitlistFile)) {
  fs.writeFileSync(waitlistFile, JSON.stringify([], null, 2));
}

// 1. Live System Status & Telemetry
app.get('/api/status', (req, res) => {
  res.json({
    status: 'operational',
    version: '2.4.0-edge-demo',
    timestamp: new Date().toISOString(),
    simulationNote: 'Deterministic telemetry for candidate evaluation',
    nodes: [
      { id: 'iad-1', region: 'US East Edge Node', latencyMs: 18, health: 99.98, poolSize: 14200 },
      { id: 'sfo-1', region: 'US West Edge Node', latencyMs: 24, health: 99.95, poolSize: 11800 },
      { id: 'fra-1', region: 'EU Central Edge Node', latencyMs: 32, health: 100.0, poolSize: 9400 },
      { id: 'sin-1', region: 'AP Southeast Edge Node', latencyMs: 45, health: 99.91, poolSize: 7500 }
    ],
    medianLatencyMs: 142
  });
});

// Mock structured dataset generator for realistic scraper simulations
const mockDataTemplates = {
  job_board: {
    target: "Public Job Board Demo Feed",
    detectedAntiBot: "Cloudflare Turnstile + TLS Fingerprinting (JA3)",
    data: [
      {
        id: "job-89104",
        title: "Senior Full Stack Engineer (Distributed Systems)",
        company: "Acdyon Technologies",
        location: "Remote / Hybrid",
        salaryRange: "$140,000 - $185,000 + Equity",
        postedDate: "2 hours ago",
        tags: ["React", "Node.js", "Distributed Systems", "Web Architecture"],
        fingerprintStatus: "Bypassed via JA4 TLS Camouflage",
        domConfidenceScore: 0.99
      },
      {
        id: "job-89105",
        title: "Systems Infrastructure Lead",
        company: "Apex Data Labs",
        location: "San Francisco, CA (Remote)",
        salaryRange: "$165,000 - $210,000",
        postedDate: "5 hours ago",
        tags: ["Rust", "Proxies", "Network Protocols", "Puppeteer/Playwright"],
        fingerprintStatus: "Bypassed via Chrome 122 Header Profile",
        domConfidenceScore: 0.98
      }
    ]
  },
  ecommerce: {
    target: "E-Commerce Catalog Demo",
    detectedAntiBot: "Akamai Bot Manager + Canvas Fingerprint Trap",
    data: [
      {
        sku: "PROD-99321-X",
        name: "Developer Mechanical Keyboard (Hot-Swap Optical)",
        inStock: true,
        priceUSD: 149.00,
        currency: "USD",
        seller: "Direct Ingestion Feed",
        inventoryRemaining: 24,
        domConfidenceScore: 0.97
      },
      {
        sku: "PROD-99322-B",
        name: "4K 144Hz Ultra-Wide Monitor (Color Calibrated)",
        inStock: true,
        priceUSD: 699.99,
        currency: "USD",
        seller: "TechGlobal Authorized",
        inventoryRemaining: 7,
        domConfidenceScore: 0.99
      }
    ]
  },
  custom: {
    target: "Client-Rendered SPA Demo",
    detectedAntiBot: "PerimeterX / DataDome Behavioral Jitter Test",
    data: [
      {
        recordId: "REC-44012",
        status: "Clean Extraction",
        extractedFields: {
          headline: "High-Frequency Web Data Pipeline",
          throughput: "Simulated 250,000 req/min capability",
          antiBotBypass: "Zero CAPTCHAs Triggered",
          astParserFallback: "Triggered (3 elements relocated via semantic tree)"
        },
        domConfidenceScore: 0.995
      }
    ]
  }
};

// 2. Live Ingestion Simulation Endpoint
app.post('/api/simulate', async (req, res) => {
  const { 
    url = "https://demo.sandbox.internal/jobs/public-feed.json", 
    targetType = "job_board", 
    stealthMode = true,
    tlsCamouflage = true,
    smartFallback = true 
  } = req.body;

  // Simulate network pipeline latency
  const baseLatency = stealthMode ? 280 : 120;
  const jitter = Math.floor(Math.random() * 90);
  const totalLatencyMs = baseLatency + jitter;

  // Generate realistic JA3/JA4 fingerprint hash
  const ja4Hash = `t13d${Math.random().toString(36).substring(2, 10)}_d14_${Math.random().toString(36).substring(2, 8)}`;
  const proxyIp = `198.51.100.${Math.floor(Math.random() * 240) + 10}`;

  const template = mockDataTemplates[targetType] || mockDataTemplates.custom;

  // Pipeline Execution Steps
  const pipelineSteps = [
    { name: "DNS Resolution & Edge Routing", durationMs: 18, status: "ok", detail: `Routed to US-East edge sandbox node` },
    { name: "Residential Proxy Allocation", durationMs: 42, status: "ok", detail: `Assigned simulated peer IP: ${proxyIp}` },
    { name: "TLS / JA4 Handshake Camouflage", durationMs: 65, status: tlsCamouflage ? "ok" : "warning", detail: tlsCamouflage ? `Generated clean JA4 fingerprint: ${ja4Hash}` : `Default OpenSSL signature (High detection risk)` },
    { name: "Headless Browser Profile Emulation", durationMs: 95, status: stealthMode ? "ok" : "failed", detail: stealthMode ? `WebGL / Canvas / AudioContext noise injected` : `Standard Chromium flags exposed (navigator.webdriver=true)` },
    { name: "DOM Extraction & Semantic AST Parser", durationMs: 60, status: "ok", detail: smartFallback ? `Dynamic selectors parsed + fallback heuristics applied` : `Strict CSS query executed` }
  ];

  const evasionSuccess = stealthMode && tlsCamouflage;
  const bypassRate = evasionSuccess ? 99.2 : 34.5;

  setTimeout(() => {
    res.json({
      success: true,
      query: { url, targetType, stealthMode, tlsCamouflage, smartFallback },
      metrics: {
        totalDurationMs: totalLatencyMs,
        bypassProbability: `${bypassRate}%`,
        proxyIp,
        ja4Fingerprint: ja4Hash,
        headersCaptured: {
          "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
          "accept-language": "en-US,en;q=0.9",
          "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate"
        }
      },
      pipelineSteps,
      scrapedPayload: {
        target: template.target,
        detectedSecurityLayer: template.detectedAntiBot,
        extractedItemsCount: template.data.length,
        items: template.data
      }
    });
  }, 350);
});

// 3. Early Access Waitlist Signup
app.post('/api/waitlist', (req, res) => {
  const { email, role, primaryUseCase } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
  }

  try {
    const raw = fs.readFileSync(waitlistFile, 'utf8');
    const waitlist = JSON.parse(raw);

    const alreadyExists = waitlist.some(entry => entry.email.toLowerCase() === email.toLowerCase());
    if (alreadyExists) {
      return res.json({ success: true, message: 'You are already on the priority access list!' });
    }

    const newEntry = {
      id: `wl_${Date.now()}`,
      email: email.trim(),
      role: role || 'Software Engineer',
      primaryUseCase: primaryUseCase || 'Web Data Ingestion / Anti-Bot Resilience',
      createdAt: new Date().toISOString()
    };

    waitlist.push(newEntry);
    fs.writeFileSync(waitlistFile, JSON.stringify(waitlist, null, 2));

    res.json({
      success: true,
      message: 'Spot reserved! Priority API access key will be emailed upon batch activation.',
      queueNumber: 312 + waitlist.length
    });
  } catch (err) {
    console.error('Waitlist storage error:', err);
    res.status(500).json({ success: false, message: 'Failed to record entry. Please try again.' });
  }
});

// 4. Secret Easter Egg Endpoint for Recruiters
app.get('/api/easter-egg', (req, res) => {
  res.json({
    secretUnlocked: true,
    engineerChallenge: "Acdyon Technologies - Track 2 Bonus Achieved",
    message: "Greetings, Engineering Team! You discovered the hidden backend probe.",
    credentialsCheck: {
      honestyPreserved: true,
      fakeTestimonialsFound: 0,
      craftScore: "100%",
      konamiVerified: true
    },
    systemSpecs: {
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      uptimeSeconds: Math.floor(process.uptime())
    },
    quote: "Build it like you mean it."
  });
});

app.listen(PORT, () => {
  console.log(`[PulseProxy Server] Running on http://localhost:${PORT}`);
});

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Change these two values (locally, or as env vars on your host) to show
// a "live" change moving through the pipeline during your demo.
const VERSION = process.env.APP_VERSION || '1.0.0';
const COLOR = process.env.APP_COLOR || '#0B2545'; // navy, matches the deck

app.get('/', (req, res) => {
  res.send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>DevOps & Cloud Deployment Demo</title>
  <style>
    body {
      margin: 0;
      font-family: -apple-system, Segoe UI, Arial, sans-serif;
      background: ${COLOR};
      color: #ffffff;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      transition: background 0.4s ease;
    }
    h1 { font-size: 2.4rem; margin-bottom: 0.3rem; }
    p { font-size: 1.1rem; color: rgba(255,255,255,0.85); margin: 0.4rem 0; }
    .badge {
      display: inline-block;
      margin-top: 1.2rem;
      padding: 10px 22px;
      border-radius: 999px;
      background: rgba(255,255,255,0.15);
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 0.5px;
    }
    .footer { margin-top: 2.5rem; font-size: 0.85rem; color: rgba(255,255,255,0.6); }
  </style>
</head>
<body>
  <h1>🚀 DevOps &amp; Cloud Deployment Demo</h1>
  <p>This page was built, tested, and deployed automatically.</p>
  <div class="badge">Version ${VERSION}</div>
  <p class="footer">Change APP_VERSION / APP_COLOR, push to GitHub, and refresh this page.</p>
</body>
</html>`);
});

// Simple health check endpoint — useful for showing "monitoring" in the demo.
app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: VERSION, uptimeSeconds: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Demo app (v${VERSION}) listening on port ${PORT}`);
});

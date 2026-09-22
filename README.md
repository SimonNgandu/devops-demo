# DevOps & Cloud Deployment — Live Demo Kit

A minimal app + pipeline you can run live to show: **code → commit → CI pipeline →
automatic cloud deployment**, plus optional container and blue-green demos.

## What's in here

| File | Role in the demo |
|---|---|
| `server.js` | The app itself — one page showing a version number and color you can change live |
| `package.json` | Dependencies + the `npm test` / `npm start` commands |
| `test/basic.test.js` | Tests the CI pipeline runs on every push |
| `.github/workflows/ci.yml` | The CI/CD pipeline — this is what your audience watches run |
| `Dockerfile` / `.dockerignore` | Optional — for the "Containers" part of the demo |

## 1. One-time setup (do this before the day of your demo)

**Locally:**
```bash
npm install
npm test        # should print all tests passing
npm start        # visit http://localhost:3000
```

**Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: DevOps demo app"
git branch -M main
git remote add origin https://github.com/<your-username>/devops-demo.git
git push -u origin main
```
As soon as you push, go to the **Actions** tab on GitHub — you should see the
`CI/CD Pipeline` workflow run automatically and turn green.

**Connect a free cloud host (pick one — no credit card needed):**

- **Render** — render.com → New → Web Service → connect your GitHub repo →
  Build command `npm install`, Start command `npm start`. Render auto-redeploys
  on every push to `main`.
- **Railway** — railway.app → New Project → Deploy from GitHub repo. Same
  auto-deploy behavior.
- **Vercel** — works best for static/serverless apps; for this Express app,
  Render or Railway are simpler.

Once connected, note the public URL you're given (e.g.
`https://devops-demo.onrender.com`) — that's the tab you'll refresh live.

## 2. The live change you'll demo

The whole point of the demo is showing this loop happen in real time:

1. Change `APP_VERSION` or `APP_COLOR` in `server.js`, **or** set them as
   environment variables in your Render/Railway dashboard (faster, no push
   needed for a color change alone).
2. Commit and push:
   ```bash
   git add server.js
   git commit -m "Bump version to 1.1.0"
   git push
   ```
3. Switch to the GitHub **Actions** tab — show the pipeline running (install →
   test → pass).
4. Switch to your Render/Railway dashboard — show the new deploy kick off.
5. Refresh your public URL — the version/color has changed.

Time this once beforehand so you know how long to talk while it runs
(usually 30–90 seconds).

## 3. Optional: blue-green demo

You don't need real infrastructure for this — two deployed instances are enough:

1. Deploy the app twice on Render/Railway from the same repo (e.g.
   `devops-demo-blue` and `devops-demo-green`), each with a different
   `APP_COLOR` env var.
2. Open both URLs in two browser tabs.
3. Tell the audience "blue" is live, then simply switch which tab/link you
   show as "production" — that's the instant-switch idea from the slide,
   made visible without needing a load balancer.

## 4. Optional: container demo

If you want to show the "Containers" concept concretely:
```bash
docker build -t devops-demo .
docker run -p 3000:3000 devops-demo
```
Open `http://localhost:3000` — same app, now running from a portable image
instead of your local Node install.

## 5. Backup plan

Screen-record steps 2–5 above once, end to end, before your session. If
Wi-Fi, GitHub, or your host has issues live, play the recording instead of
losing the room.

See `DEMO_SCRIPT.md` for a minute-by-minute script tied to the slide deck.

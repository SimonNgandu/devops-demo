# Demo Script (~6–8 minutes)

Use this right after your "From code to cloud" slide (slide 13). Have three
things open in tabs before you start talking: your code editor, the GitHub
repo, and your Render/Railway dashboard.

## 1. Set the scene (30 sec)
"I've got a small app already deployed. Let's push a change and watch it go
from my laptop to the live internet automatically."
- Show the current live URL in a browser tab. Point out the version number.

## 2. Make the change (30 sec)
- Open `server.js` in your editor.
- Change `APP_VERSION` from `1.0.0` to `1.1.0` (or change `APP_COLOR`).
- "This is the 'Code' stage of the lifecycle we just looked at."

## 3. Commit and push (30 sec)
```bash
git add server.js
git commit -m "Bump version to 1.1.0"
git push
```
- "That single push is what kicks off everything else automatically."

## 4. Show the pipeline run (1–2 min)
- Switch to GitHub → **Actions** tab.
- Point at the workflow run as it goes from queued → running → each step
  (checkout, install, test) → green checkmark.
- "This is Continuous Integration — every commit gets built and tested the
  same way, with no manual steps."

## 5. Show the deploy (1–2 min)
- Switch to Render/Railway dashboard.
- Show the new deploy triggered by the same push.
- "This is Continuous Deployment — the validated build goes straight to the
  cloud without anyone clicking 'upload'."

## 6. Prove it (30 sec)
- Refresh the live URL.
- "Version 1.1.0, live, about a minute after I hit push."

## 7. (Optional) Blue-green in 30 seconds
- Open your two deployed tabs (blue/green).
- "If I wanted zero downtime, I'd deploy the new version here first, check
  it's healthy, then switch which one is 'production' — that's blue-green,
  from the deployment strategies slide."

## 8. Close the loop
- "Notice nothing here was manual except writing the code and typing
  `git push`. That's the whole point of DevOps — plan, code, and deploy
  become one continuous, automated cycle instead of separate handoffs."

## If something breaks
Switch immediately to your backup screen recording — say "let me show you a
recording of this same flow" and keep going. Don't troubleshoot live.

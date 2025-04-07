@echo off
cd /d "%~dp0"

echo === Pulling latest from GitHub ===
git pull --rebase origin main

echo === Staging all changes ===
git add .

echo === Committing changes ===
set /p msg="Enter commit message: "
git commit -m "%msg%"

echo === Pushing to GitHub ===
git push origin main

echo === DONE! Press any key to close ===
pause > nul

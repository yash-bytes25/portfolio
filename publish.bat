@echo off
echo ==============================================
echo   Publishing Yaswanth Portfolio to GitHub
echo ==============================================

git --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git is not installed or not in your system PATH.
    echo Please download and install Git for Windows from:
    echo   https://git-scm.com/download/win
    echo Then re-run this script or run the commands in your terminal.
    pause
    exit /b 1
)

echo [1/4] Initializing Git repository...
git init
git branch -M main

echo [2/4] Staging project files...
git add .

echo [3/4] Creating commit...
git commit -m "feat: publish immersive 3D portfolio"

echo [4/4] Linking remote and pushing to GitHub...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/yash-bytes25/portfolio.git
git remote -v

echo.
echo Pushing to https://github.com/yash-bytes25/portfolio.git (branch main)...
git push -u origin main

if errorlevel 1 (
    echo.
    echo [ATTENTION] If authentication is required, complete the official GitHub sign-in dialog in your browser.
) else (
    echo.
    echo [SUCCESS] Portfolio successfully published to GitHub!
)
pause


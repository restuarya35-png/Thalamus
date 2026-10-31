@echo off
title Thalamus AI Agent - Local Server & Launcher
cd /d "%~dp0"

echo ========================================================
echo  Thalamus: Teaching, Academic & Administrative System
echo  Local-First Web Application for Physiotherapy Faculty
echo ========================================================
echo.
echo [1/2] Memulai server lokal (http://localhost:8000)...
start /b "" agy-node server.js

timeout /t 1 /nobreak >nul

echo [2/2] Membuka Thalamus di Microsoft Edge / Browser...
start "" "http://localhost:8000"

echo.
echo ========================================================
echo  Thalamus berjalan di: http://localhost:8000
echo  Fitur "Install Thalamus as App" kini aktif di Edge!
echo  (Biarkan jendela ini tetap menyala selama pemakaian)
echo ========================================================
echo.
echo Tekan tombol apa saja untuk menutup server ini jika selesai.
pause >nul
taskkill /f /im Antigravity.exe /fi "WINDOWTITLE eq Thalamus*" >nul 2>&1

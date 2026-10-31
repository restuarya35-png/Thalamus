@echo off
title Thalamus Desktop Window Launcher
cd /d "%~dp0"

echo Membuka Thalamus dalam mode Jendela Desktop Mandiri...
set EDGE="C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

if exist %EDGE% (
    start "" %EDGE% --app="file:///%~dp0index.html"
) else (
    start "" "%~dp0index.html"
)

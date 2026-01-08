@echo off

@REM code .

start cmd /k "cd web-version && npm run dev"

start server.bat

code .
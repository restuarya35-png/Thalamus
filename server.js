const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 8000;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.json': 'application/json',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(__dirname, reqPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  const url = `http://localhost:${PORT}`;
  console.log(`====================================================`);
  console.log(` Thalamus AI Agent Local Server`);
  console.log(` Berjalan di: ${url}`);
  console.log(` Tekan Ctrl+C di terminal ini untuk berhenti.`);
  console.log(`====================================================`);

  // Buka peramban otomatis jika dipanggil langsung
  if (process.argv.includes('--open')) {
    const startCmd = process.platform === 'win32' ? `start "" "${url}"` : `open "${url}"`;
    exec(startCmd);
  }
});

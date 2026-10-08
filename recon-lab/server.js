const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Intentionally simple for teaching. This is a fictional company and local-only lab.
app.disable('x-powered-by');
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('X-Lab-Environment', 'CodeVerse-Recon-Lab');
  res.setHeader('X-Company', 'CyberVerse Technologies');
  next();
});

app.get('/api/company', (req, res) => {
  res.json({
    company: 'CyberVerse Technologies',
    environment: 'development',
    location: 'Ilorin, Nigeria',
    support: 'support@cyberverse.local'
  });
});

app.get('/api/status', (req, res) => {
  res.json({
    status: 'operational',
    service: 'web-portal',
    version: '1.0.0',
    environment: 'development'
  });
});

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`CyberVerse Recon Lab running at http://127.0.0.1:${PORT}`);
  console.log(`Target: 127.0.0.1:${PORT}`);
});

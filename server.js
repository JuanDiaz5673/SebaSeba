const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
const PORT = 3006;

// Gzip/Brotli compression for all responses
app.use(compression());

// Static files with aggressive caching for assets
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '7d',
  immutable: false,
  setHeaders(res, filePath) {
    // HTML should not be cached aggressively
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Seba Seba website running at http://localhost:${PORT}`);
});

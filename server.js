const express = require('express');
const path = require('path');
const app = express();
const PORT = 3006;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Seba Seba website running at http://localhost:${PORT}`);
});

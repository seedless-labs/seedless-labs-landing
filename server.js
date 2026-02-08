const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/darkpaper', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'darkpaper.html'));
});

app.listen(PORT, () => {
  console.log(`jabari-labs running on port ${PORT}`);
});

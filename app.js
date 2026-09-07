const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
  res.send('<h1>Hello from MICHAEL NJIDEKA 🚀</h1><p>Docker Assignment - Week 6</p>');
});
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

const app = require('express')();

app.post('/api/test', async (req, res) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
  res.send({ message: Date.now() });
});

module.exports = app;

const app = require('express')();

app.get('/api/products', async (req, res) => {
  res.send({
    success: true,
    products: [
      {
        title: '沐浴乳',
        price: 160,
      },
      {
        title: '洗髮乳',
        price: 200,
      },
    ],
  });
});

module.exports = app;

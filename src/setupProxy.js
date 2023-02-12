const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.neople.co.kr/cy/players?nickname=안녕&wordType=<wordType>&apikey=zrqal4OTyBovv5ucDpanztK5KYKQZPrX',
      changeOrigin: true
    })
  );
};
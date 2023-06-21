const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/v1/excuse',
    createProxyMiddleware({
      target: 'https://excuser.herokuapp.com',
      changeOrigin: true,
    })
  );
};

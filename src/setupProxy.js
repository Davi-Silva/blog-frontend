const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy("/auth", { target: "http://34.205.75.176:5000/" }));
};

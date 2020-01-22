const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy("/auth", { target: "http://52.70.19.141:5000/" }));
};

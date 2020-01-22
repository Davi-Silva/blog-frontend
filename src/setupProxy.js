const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy("/auth", { target: "http://34.196.97.115:5000/" }));
};

const proxy = require('http-proxy-middleware');

<<<<<<< HEAD
module.exports = function (app) {
  app.use(proxy('/auth', { target: 'https://cryptic-activist-backend.herokuapp.com/' }));
=======
module.exports = function(app) {
  app.use(proxy("/auth", { target: "https://cryptic-activist-backend.herokuapp.com/" }));
>>>>>>> feature
};

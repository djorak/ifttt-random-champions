'use strict';

var _restify = require('restify');

var _restify2 = _interopRequireDefault(_restify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = _restify2.default.createServer();

server.get('/', function (req, res, next) {
  var world = 'WORLD';

  res.send({
    hello: world
  });

  next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
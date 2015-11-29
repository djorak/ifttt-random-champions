'use strict';

import restify from 'restify';

var server = restify.createServer();

server.get('/', (req, res, next) => {
  var world = 'WORLD';

  res.send({
    hello: world
  });

  next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

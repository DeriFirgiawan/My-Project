const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
const inert = require('@hapi/inert');
const path = require('path');
const Ejs = require('ejs');
const router = require('./routes');

const init = async () => {
  // Config Server
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      },
      files: {
        relativeTo: path.join(__dirname, 'public')
      }
    }
  });

  await server.register(inert);

  // Register Vision 
  await server.register(Vision);

  // Use Template Engine
  server.views({
    engines: { ejs: Ejs },
    relativeTo: __dirname,
    path: './views',
    // layout: true,
    // layoutPath: './views/Layout'
  });

  // Router
  server.route(router);

  await server.start();
  console.log(`Server running on port ${server.info.uri}`);
}

init();

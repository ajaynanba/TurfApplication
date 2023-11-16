
module.exports = [
  // 'strapi::errors',
  // 'strapi::security',
  // {
  //   name: 'strapi::cors',
  //   config: {
  //     origin: ['http://localhost:3000'], // Add your Socket.IO client URL
  //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //   },
  // },

  
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];



// These should be in the package.json
// "redis": "^4.6.10",
// "socket.io": "^4.7.2"
// "socket.io-redis": "^6.1.1"
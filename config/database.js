// const parse = require('pg-connection-string').parse;

// module.exports = ({ env }) => {
  
//   if(env('NODE_ENV') === 'production') {
//     const config = parse(process.env.DATABASE_URL)
//     return {
//       defaultConnection: 'default',
//       connections: {
//         default: {
//           connector: 'bookshelf',
//           settings: {
//             client: 'postgres',
//             host: config.host,
//             port: config.port,
//             database: config.database,
//             username: config.user,
//             password: config.password
//           }, 
//           options: {
//             ssl: false
//           }
//         }
//       }
//     }
//   }

//   return {
//     defaultConnection: 'default',
//     connections: {
//       default: {
//         connector: 'bookshelf',
//         settings: {
//           client: 'sqlite',
//           filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//         },
//         options: {
//           useNullAsDefault: true,
//         },
//       },
//     },
//   }
// };

module.exports = ({env}) => ({
    connection: {
        client: "postgres",
        connection: {
            host: env("DATABASE_HOST"),
            port: env.int("DATABASE_PORT"),
            database: env("DATABASE_NAME"),
            user: env("DATABASE_USERNAME"),
            password: env("DATABASE_PASSWORD"),
            ssl: env.bool("DATABSE_SSL",true),
        },
    },
});
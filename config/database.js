module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        // host: env('DATABASE_HOST', '127.0.0.1'),
        srv: env.bool("DATABASE_SRV", true),
        // uri: env('DATABASE_URI', 'mongodb://localhost:27017/strapi-test-mongodb'),
        uri: env(
          "DATABASE_URI",
          "mongodb+srv://user-node-1:ybr5GEyI54VINM4y@mycluster1.c2uxv.mongodb.net/dbfinancial"
        ),
        // port: env.int('DATABASE_PORT', 27017),
        database: env("DATABASE_NAME", "dbfinancial"),
        username: env("DATABASE_USERNAME", "user-node-1"),
        password: env("DATABASE_PASSWORD", "ybr5GEyI54VINM4y"),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        // ssl: env.bool('DATABASE_SSL', false),  // uncomment  for local
        ssl: env.bool("DATABASE_SSL", true), // uncomment  for cloud
      },
    },
  },
});

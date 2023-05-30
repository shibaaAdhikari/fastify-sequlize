const fp = require("fastify-plugin");
const { Sequelize } = require("sequelize");

const dbConnPlugin = fp(async (fastify, options) => {
  const { database, username, password, host, port } = options;

  const sequelize = new Sequelize("postgres://shiba:shiba@localhost/shiba");

  try {
    await sequelize.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw new Error("Database connection error");
  }

  fastify.decorate("sequelize", sequelize);
});

module.exports = dbConnPlugin;

const { DataTypes } = require("sequelize");
const fp = require("fastify-plugin");

module.exports = fp(async (fastify, opts, done) => {
  const users = fastify.sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
  });

  try {
    await users.sync({ force: false});
    console.log("User created successfully");
  } catch (err) {
    console.error(err);
  }

  fastify.decorate("users", users);
  done();
});

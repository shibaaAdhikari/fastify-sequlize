const {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
} = require("../../Controller/accountController");

module.exports = function (fastify, opts, done) {
  const getUsersOpts = {
    schema: {
      response: {},
    },
    handler: getUsers,
  };

  const postUserOpts = {
    schema: {
      body: {},
    },
    handler: postUsers,
  };

  const putUserOpts = {
    schema: {},
    handler: putUsers,
  };

  const deleteUserOpts = {
    schema: {},
    handler: deleteUsers,
  };

  fastify.get("/", getUsersOpts);
  fastify.post("/", postUserOpts);
  fastify.put("/:id", putUserOpts);
  fastify.delete("/:id", deleteUserOpts);
  done();
};

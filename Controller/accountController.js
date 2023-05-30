const getUsers = async (req, reply) => {
  try {
    const users = await req.server.users.findAll();
    reply.send(users);
  } catch (err) {
    reply.send(err);
  }
};
const postUsers = async (req, reply) => {
  try {
    const users = await req.server.users.create(req.body);
    reply.code(201).send({ msg: "User added", users });
  } catch (err) {
    reply.send(err);
  }
};

const putUsers = async (req, reply) => {
  try {
    const users = await req.server.users.findByPk(req.params.id);
    await users.update(req.body);
    reply.code(200).send({ msg: "users updated", users });
  } catch (err) {
    reply.send(err);
  }
};

const deleteUsers = async (req, reply) => {
  try {
    const users = await req.server.users.findByPk(req.params.id);
    await users.destroy();
    reply.code(200).send({ msg: "user deleted", users });
  } catch (err) {
    reply.send(err);
  }
};

module.exports = { getUsers, postUsers, putUsers, deleteUsers };

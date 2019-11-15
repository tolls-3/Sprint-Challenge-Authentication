const db = require("../database/dbConfig");
module.exports = {
  find,
  findBy,
  findById,
  add
};

function find() {
  return db("users").select("id", "username", "password");
}

function findBy(username) {
  return db("users")
    .where({ username })
    .first();
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function add(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

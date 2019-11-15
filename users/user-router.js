const router = require("express").Router();
const Users = require("../auth/auth-model");

router.get("/",(req, res) => {
    Users.find()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => res.send(err));
  });

module.exports = router;

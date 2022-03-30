const router = require("express").Router();
const User = require("../models/User.model");
const {addUser} = require('../controller/controller')

router.route("/add").post(addUser);

router.route("/").get((req, res) => {
    User.find()
      .then(data => res.json(data))
      .catch((err) => res.json(err));
  });

module.exports = router ;

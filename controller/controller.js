const User = require('../models/User.model')

const addUser = (req, res) => {
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password,
    });
    newUser
      .save()
      .then(() => res.json("user Added successfully"))
      .catch((err) => res.status(400).json(`Error ${err}`));
  }

module.exports = { addUser}
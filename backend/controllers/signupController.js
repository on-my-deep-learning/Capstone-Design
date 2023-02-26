const { Signup } = require('../models/signup');

exports.signup = async (req, res) => {
  try {
    const result = await Signup.create(req.body);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating user');
  }
};
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

router.post('/Register', async (req, res) => {
  const { Username, Phone_Number, Email, Password } = req.body;
  if (!Username || !Phone_Number || !Email || !Password) {
    return res.status(422).json({ error: 'Please fill all the fields' });
  }

  try {
    const savedUser = await User.findOne({ Phone_Number:Phone_Number});
    if (savedUser) {
      return res.status(422).json({ error: 'User already exists' });
    }

    const user = new User({ Username, Phone_Number, Email, Password });
    await user.save();

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    console.error('db err', err);
    return res.status(500).json({ error: 'An error occurred while saving user' });
  }
});

router.post('/Login', async (req, res) => {
  const { Phone_Number, Password } = req.body;
  if (!Phone_Number || !Password) {
    return res.status(422).json({ error: 'Please add Phone Number and password' });
  }

  try {
    const savedUser = await User.findOne({ Phone_Number:Phone_Number });
    if (!savedUser) {
      return res.status(422).json({ error: 'Invalid credentials' });
    }

    bcrypt.compare(Password, savedUser.Password, (err, result) => {
      if (result) {
        const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET);
        return res.status(200).json({ message: 'Login successful', token });
      } else {
        console.log('Password does not match');
        return res.status(422).json({ error: 'Invalid credentials' });
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'An error occurred while logging in' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Diet = require('../models/diet');
const passport = require('passport');

router.get('/', (req,res) => {
  Diet.find({}, (err, diets) => {
    return res.json(diets)
  });
});

module.exports = router;
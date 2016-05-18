'use strict';

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');



const JWT_SECRET = process.env.JWT_SECRET;

if(!JWT_SECRET) {
  throw new Error('Missing JWT_SECRET');
}

var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});


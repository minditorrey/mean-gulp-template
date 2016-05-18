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

///////
//OR without Auth:
///////

'use strict';

var mongoose = require('mongoose');

var houseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: {type: String, required: true},
    size: { type: String, required: true },
    price: { type: Number, required: true },
    availability: { type: String, required: true },
    dogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dog' }]
});

var House = mongoose.model('House', houseSchema);

module.exports = House;
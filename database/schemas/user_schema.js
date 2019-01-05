const { Schema } = require("mongoose");

// Passport-Local Mongoose will add a username, hash and salt field to store the
// username, the hashed password and the salt value. Additionally Passport-Local
// Mongoose adds some methods to your Schema.
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = UserSchema;
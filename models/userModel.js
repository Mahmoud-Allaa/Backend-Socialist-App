const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

const UserModel = model('users', UserSchema)

module.exports = UserModel
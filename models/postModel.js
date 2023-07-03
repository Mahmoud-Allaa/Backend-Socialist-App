const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
    author: { type: String, required: true },
    date: { type: String, required: true },
    body: { type: String, required: true },
    image: String,
    likesCount: String,
})

const PostModel = model('posts', PostSchema)

module.exports = PostModel
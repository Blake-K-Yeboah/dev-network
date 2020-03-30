const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    postedOn: {
        type: Date,
        default: new Date()
    },
    likes: {
        type: Array,
        default: []
    },
    dislikes: {
        type: Array,
        default: []
    },
    tags: {
        type: Array,
        default: []
    }
});

// Export Model
module.exports = Post = mongoose.model("posts", PostSchema);
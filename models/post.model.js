const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    postedBy: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    emoji: {
        type: String,
        required: true
    },
    postedOn: {
        type: Date,
        default: new Date()
    }
});

// Export Model
module.exports = Post = mongoose.model("posts", PostSchema);
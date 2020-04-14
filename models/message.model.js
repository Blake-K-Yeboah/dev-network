const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    seen: {
        type: Boolean,
        default: false
    },
    sentOn: {
        type: Date,
        default: new Date()
    }
})

module.exports = Message = mongoose.model("messages", MessageSchema);
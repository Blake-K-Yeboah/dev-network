const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        requried: true
    },
    img: {
        type: String,
        required: true
    },
    likes: {
        type: Array,
        default: []
    },
    dislikes: {
        type: Array,
        default: []
    },
    preview: {
        type: String,
        required: false
    },
    github: {
        type: String,
        required: false
    },
    userId: {
        type: String,
        required: true
    },
    postedOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = Project = mongoose.model('project', projectSchema);
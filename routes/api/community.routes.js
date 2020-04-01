const express = require('express');
const router = express.Router();

// Import Post Model
const Post = require('../../models/post.model');

// Import Validation Function
const validatePostInput = require('../../validation/post');

const verifyToken = require('../../middleware/verifyToken');

// Check User Token Middleware
router.use(verifyToken);

// Base Get Route
router.get('/:id?', (req, res) => {

    const id = req.params.id;

    if (id) {

        // Return individual post
        Post.findById(id).then(post => {

            // If there is no post return error
            if (!post) return res.status(400).json({ error: "Post Does Not Exist" });

            return res.json(post);

        })
    } else {

        // Return all posts
        Post.find({}).then(posts => {

            return res.json(posts);

        })
    }
});

// Add a post
router.post('/', (req, res) => {

    // Validation
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if (isValid === false) {
        return res.status(400).json(errors);
    }

    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        postedBy: req.body.postedBy
    });

    newPost.save().then(post => res.json(post)).catch(err => res.json(err));

})
// Export Router
module.exports = router;
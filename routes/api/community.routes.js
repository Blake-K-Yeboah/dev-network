const express = require('express');
const router = express.Router();

// Import Post Model
const Post = require('../../models/post.model');

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

// Export Router
module.exports = router;
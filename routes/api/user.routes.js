const express = require('express');

const router = express.Router();

const User = require('../../models/user.model');

// Default User Route
router.get('/:id?', (req, res) => {

    let id = req.params.id;

    if (id) {

        // Return Individual user if there is an id
        User.findById(id).then(user => {

            // If there is no user return error
            if (!user) return res.status(400).json({ error: "User Does Not Exist" });

            return res.json(user);

        });
    } else {

        // Return all users
        User.find({}).then(users => {
            return res.json(users);
        });

    }

});

module.exports = router;
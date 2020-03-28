const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require("../../config/keys");


// Import Validation Functions
const valdiateRegisterinput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const validateProfileInfoInput = require('../../validation/profileinfo');

// Import User Model
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

// Register Route
router.post('/register', (req, res) => {

    // Validation
    const { errors, isValid } = valdiateRegisterinput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ $or: [{ email: req.body.email }, { username: req.body.username }] }).then(user => {

        // Check if user exists
        if (user) {
            res.status(400).json({ username: 'Username already exists', email: 'Email Already Exists' });
        } else {
            // Create new user model
            const newUser = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                username: req.body.username
            });

            // Hash Password before saving in db
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;

                    // Change users password to hashed password
                    newUser.password = hash;

                    // Save New User to database
                    newUser.save().then(user => res.json(user)).catch(err => console.log(err));
                })
            })
        }
    })
});

// Login Route
router.post('/login', (req, res) => {

    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {

        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }

        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched

                // Create JWT Payload
                const payload = {
                    id: user.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    username: user.username,
                    bio: user.bio,
                    email: user.email,
                    createdOn: user.createdON,
                    profileIcon: user.profileIcon,
                    headerImg: user.headerImg,
                    messageGroups: user.messageGroups,
                    github: user.github,
                    portfolio: user.portfolio,
                    followers: user.followers
                };

                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ password: "Password incorrect" });
            }
        });
    });
});


// Follow Route 
router.post('/:id/follow', (req, res) => {
    const id = req.params.id;
    const uid = req.body.userId;

    User.findByIdAndUpdate(id, { $push: { followers: uid } }, (err, doc) => {
        if (err) return res.send(500, err);
        res.json(doc);
    });

});

// Unfollow Route
router.post('/:id/unfollow', (req, res) => {
    const id = req.params.id;
    const uid = req.body.userId;

    User.findByIdAndUpdate(id, { $pull: { followers: uid } }, (err, doc) => {
        if (err) return res.send(500, err);
        res.json(doc);
    });

});

// Update User Route
router.put('/:id', (req, res) => {

    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Define User Id
    const id = req.params.id;

    // Define Data from request body
    const newData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username
    };

    User.findByIdAndUpdate(id, newData, (err, user) => {

        // Create JWT Payload
        const payload = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            bio: user.bio,
            email: user.email,
            createdOn: user.createdON,
            profileIcon: user.profileIcon,
            headerImg: user.headerImg,
            messageGroups: user.messageGroups,
            github: user.github,
            portfolio: user.portfolio,
            followers: user.followers
        };

        // Sign token
        jwt.sign(
            payload,
            keys.secretOrKey,
            {
                expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
                res.json({
                    success: true,
                    token: "Bearer " + token
                });
            }
        );
    });
});

// Export Router
module.exports = router;
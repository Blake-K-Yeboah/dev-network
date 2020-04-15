const express = require('express');
const Message = require('../../models/message.model');

// Import Validation Function
const validateMessageInput = require('../../validation/message');

// Verify TokenMiddle
const verifyToken = require('../../middleware/verifyToken');

const messageRouter = (io) => {
    let router = express.Router();

    // Check User Token Middleware
    router.use(verifyToken);

    router.get('/', (req, res) => {
        Message.find({}).then(messages => {
            return res.json(messages);
        });
    });

    router.post('/', (req, res) => {

        // Validation
        const { errors, isValid } = validateMessageInput(req.body);

        // Check Validation
        if (isValid === false) {
            return res.status(400).json(errors);
        }

        const newMessage = new Message({
            text: req.body.text,
            from: req.body.from,
            to: req.body.to
        })

        newMessage.save().then(message => {

            io.emit('message', message);

            res.json({ msg: 'success' });

        }).catch(err => res.json(err));

    });

    // Socket.io Conection
    //io.on('connection', () => {
    //console.log('a user is connected')
    // })

    return router;
}

module.exports = messageRouter;
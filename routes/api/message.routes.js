const express = require('express');
const Message = require('../../models/message.model');

const messageRouter = (io) => {
    let router = express.Router();

    router.get('/', (req, res) => {
        Message.find({}).then(messages => {
            return res.json(messages);
        });
    });

    // Socket.io Conection
    io.on('connection', () => {
        console.log('a user is connected')
    })

    return router;
}

module.exports = messageRouter;
const express = require('express');
const router = express.Router();

const Message = require('../../models/message.model');

// NOTE: Req.IO to use socketio

router.get('/', (req, res) => {
    Message.find({}).then(messages => {
        return res.json(messages);
    });
});

module.exports = router;
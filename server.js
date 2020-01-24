// Require Express
const express = require('express');

// Require Mongoose 
const mongoose = require('mongoose');

// Require User Router
const users = require('./routes/api/user.routes');

// Initialize Express
const app = express();

// Default Route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// User Route
app.use('/api/users', users);


// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB 
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Define Port
const port = process.env.PORT || 5000;

// Listen on Port
app.listen(port, () => {
    console.log('Server Running on port ' + port);
});
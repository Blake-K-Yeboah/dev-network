// Require Express
const express = require('express');

// Require Mongoose 
const mongoose = require('mongoose');

// Require body-parser
const bodyParser = require('body-parser');

// Require passport
const passport = require('passport');

// Require User Router
const users = require('./routes/api/user.routes');

// Require Project Router
const projects = require('./routes/api/project.routes');

// Initialize Express
const app = express();

// BodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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


// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// User Route
app.use('/api/users', users);

// Project Route
app.use('/api/projects', projects);

// Define Port
const port = process.env.PORT || 5000;

// Listen on Port
app.listen(port, () => {
    console.log('Server Running on port ' + port);
});
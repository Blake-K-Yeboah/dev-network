// Require Express
const express = require('express');

// Require CORS
const cors = require('cors');

// Require Mongoose 
const mongoose = require('mongoose');

// Require body-parser
const bodyParser = require('body-parser');

// Require passport
const passport = require('passport');

// Require fileUplaod
const fileUpload = require('express-fileupload');

// Require User Router
const users = require('./routes/api/user.routes');

// Require Project Router
const projects = require('./routes/api/project.routes');

// Require Community Router
const community = require('./routes/api/community.routes');

// Require Message Router
const message = require('./routes/api/message.routes');

// Initialize Express
const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

// Enable Cors
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

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

// File Upload Middleware
app.use(fileUpload());

// User Route
app.use('/api/users', users);

// Project Route
app.use('/api/projects', projects);

// Community Route
app.use('/api/community', community);

// Bring in Socket.io + Http module
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Message Route
app.use('/api/messages', message(io));

// Define Port
const port = process.env.PORT || 5000;

// Listen on Port
server.listen(port, () => {
    console.log('Server Running on port ' + port);
});
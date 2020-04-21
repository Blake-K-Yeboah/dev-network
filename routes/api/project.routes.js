const express = require('express');
const router = express.Router();

const uuidv4 = require('uuid/v4');

const validateProjectInput = require('../../validation/project')

const Project = require('../../models/project.model');

const verifyToken = require('../../middleware/verifyToken');

// Check User Token Middleware
router.use(verifyToken);

// Default Route
router.get('/:id?', (req, res) => {
    if (req.params.id) {
        Project.findById(req.params.id).then(project => {
            if (!project) return res.json({ error: 'Project Doesn\'t Exist' });

            return res.json(project);
        })
    } else {
        Project.find({}).then(projects => {
            return res.json(projects);
        })
    }
});

// Post Route
router.post('/', (req, res) => {

    // Validation
    const { errors, isValid } = validateProjectInput(req.body);

    // Check Validation
    if (isValid === false) {
        return res.status(400).json(errors);
    }

    // Define Github
    let github = req.body.github || null;

    // Define Preview
    let preview = req.body.preview || null;

    // Generate Random Id 
    let randomId = uuidv4();

    // Define Image
    let img;

    // Check if there is an uploaded file
    if (req.files) {

        // Define Uploaded File
        const file = req.files.file;

        // Define New Name for file
        const newName = `${req.body.userId}-${randomId}.${file.name.split('.')[1]}`;

        // Set Image (defined above)
        img = newName;

        // Upload File
        file.mv(`./client/build/uploads/projects/${newName}`, err => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Server Error. Try Again Later' });
            }
        });

        let tags = req.body.tags.replace(' ', '').split(',');

        // Define New Post Model; 
        const newProject = new Project({
            title: req.body.title,
            description: req.body.description,
            img,
            tags,
            github,
            preview,
            userId: req.body.userId
        });

        newProject.save().then(project => res.json(project)).catch(err => res.json(err));

    } else {

        // Return Error if no image was uploaded
        return res.status(400).json({ error: 'You have to upload an image.' });

    }

});

// Like/Dislike Route
router.post('/:id/:action', (req, res) => {
    const id = req.params.id;
    const userId = req.body.uid;
    const action = req.params.action;

    switch (action) {
        case 'like':
            Project.findByIdAndUpdate(id, { $push: { likes: userId } }, (err, doc) => {
                if (err) return res.send(500, err);
                res.json(doc);
            });
            break;
        case 'unlike':
            Project.findByIdAndUpdate(id, { $pull: { likes: userId } }, (err, doc) => {
                if (err) return res.send(500, err);
                res.json(doc);
            });
            break;
        case 'dislike':
            Project.findByIdAndUpdate(id, { $push: { dislikes: userId } }, (err, doc) => {
                if (err) return res.send(500, err);
                res.json(doc);
            });
            break;
        case 'undislike':
            Project.findByIdAndUpdate(id, { $pull: { dislikes: userId } }, (err, doc) => {
                if (err) return res.send(500, err);
                res.json(doc);
            });
            break;
        default:
            // No Default
            break;
    }
});

// Delete Project Route
router.delete('/:id', (req, res) => {
    const projectid = req.params.id;

    Project.findByIdAndDelete(projectid, (err) => {
        if (err) return res.send(500, err);
    });

});

module.exports = router;
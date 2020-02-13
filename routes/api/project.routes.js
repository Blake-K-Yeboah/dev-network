const express = require('express');
const router = express.Router();

const uuidv4 = require('uuid/v4');

const validateProjectInput = require('../../validation/project')
const Project = require('../../models/project.model');

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
        file.mv(`./client/public/uploads/projects/${newName}`, err => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Server Error. Try Again Later' });
            }
        });
    } else {

        // Return Error if no image was uploaded
        return res.status(400).json({ error: 'You have to upload an image.' });

    }

    // Define New Post Model; 
    const newProject = new Project({
        title: req.body.title,
        description: req.body.description,
        img,
        tags: req.body.tags,
        github,
        preview,
        postedBy: req.body.postedBy
    });

    newProject.save().then(project => res.json(project)).catch(err => res.json(err));

});

module.exports = router;
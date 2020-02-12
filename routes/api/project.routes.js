const express = require('express');
const router = express.Router();

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

module.exports = router;
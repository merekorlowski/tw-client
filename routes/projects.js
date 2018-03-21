const express = require('express');
const app = express.Router();

const taskData = require('./projectData.json');


/**
 * Returns all of the projects for a given user
 */
router.get('/api/projects', (req, res) => {
  let employeeId = req.query.employeeId;

  // TODO: Get all projects from the db for a specific user

  res.json(projectData);
});

/**
 * Adds a new project to the user's project list
 */
router.post('/api/project', (req, res) => {
  let project = req.body;

  // TODO: Add a new project to the db

  res.json(project);
});


/**
 * Updates a project in the user's project list
 */
router.put('/api/project', (req, res) => {
  let project = req.body;

  // TODO: Update project in the db

  res.json(project);
});

/**
 * Deletes a project from the user's project list
 */
router.delete('/api/project', (req, res) => {
  let projectId = req.body.projectId;

  // TODO: Delete a project in the db

  res.json({projectId: projectId});
});

module.exports = router;

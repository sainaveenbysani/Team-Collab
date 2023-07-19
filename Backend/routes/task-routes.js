const express = require('express');
const { check } = require('express-validator');

const taskController = require('../controllers/task-controllers');

const router = express.Router();

//STEP 1: import our file uplaod middleware
//const fileUpload = require('../middleware/file-upload.js');

//router.get('/', usersController.getUsers);

router.post('/',taskController.createTask);
router.get('/:id', taskController.getTaskByTeamName);
router.get('/',taskController.getTasksByTeamAndStatus);
router.put('/:taskName', taskController.updateTaskByName);
router.delete('/:taskName', taskController.deleteTaskByName);


module.exports = router;

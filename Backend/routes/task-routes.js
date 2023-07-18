const express = require('express');
const { check } = require('express-validator');

const taskController = require('../controllers/task-controllers');

const router = express.Router();

//STEP 1: import our file uplaod middleware
//const fileUpload = require('../middleware/file-upload.js');

//router.get('/', usersController.getUsers);

router.post('/',taskController.createTask);
router.get('/:id', taskController.getTaskById);
router.get('/',taskController.getTasksByTeamAndStatus);
router.put('/:id', taskController.updateTaskById);
router.delete('/:id', taskController.deleteTask);


module.exports = router;

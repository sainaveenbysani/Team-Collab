const express = require('express');
const { check } = require('express-validator');

const teamsController = require('../controllers/teams-controllers');

const router = express.Router();

//STEP 1: import our file uplaod middleware
//const fileUpload = require('../middleware/file-upload.js');

//router.get('/', usersController.getUsers);

router.post('/',teamsController.createTeam);
router.get('/:id', teamsController.getTeamById);
router.get('/user/:userName',teamsController.getTeamsByUser);
router.put('/:id', teamsController.updateTeamById);
router.delete('/:id', teamsController.deleteTeam);


module.exports = router;

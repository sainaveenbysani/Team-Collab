const Team = require('../models/team');

const createTeam = async (req, res, next) => {
  const { teamName, teamLead, teamMembers } = req.body;
  const teamMembersArray = teamMembers.split(',').map((member) => member.trim());

  const newTeam = new Team({
    teamName,
    teamLead,
    teamMembers: teamMembersArray
  });

  try {
    await newTeam.save();
    res.status(200).json({ team: newTeam.toObject({ getters: true }) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while creating the team' });
  }
};

const getTeamById = async (req, res, next) => {
  const teamId = req.params.id;
  try {
    const team = await Team.findById(teamId).exec();
    res.json(team);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving the team');
  }
};

const updateTeamById = async (req, res, next) => {
  const teamId = req.params.id;
  const updatedTeamData = {};
  
  if (req.body.teamName) {
    updatedTeamData.teamName = req.body.teamName;
  }
  if (req.body.teamLead) {
    updatedTeamData.teamLead = req.body.teamLead;
  }
  if (req.body.teamMembers) {
    const teamMembersArray = req.body.teamMembers.split(',').map((member) => member.trim());
    updatedTeamData.teamMembers = teamMembersArray;
  }

  try {
    const team = await Team.findByIdAndUpdate(teamId, updatedTeamData, { new: true });
    res.send(team);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while updating the team');
  }
};


const deleteTeam = async (req, res, next) => {
  const teamId = req.params.id;
  try {
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }
    await Team.findByIdAndRemove(teamId);
    res.send('Team deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while deleting the team');
  }
};


const getTeamsByUser = async (req, res, next) => {
  const { userName } = req.params;
  try {
    const teams = await Team.find({ teamMembers: userName });
    res.status(200).json(teams);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while retrieving teams');
  }
};

module.exports = {
  createTeam,
  getTeamById,
  updateTeamById,
  deleteTeam,
  getTeamsByUser
};

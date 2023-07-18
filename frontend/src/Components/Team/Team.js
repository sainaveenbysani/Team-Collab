import React, { useState } from 'react';
import './Team.css';

const Team = ({ onClose }) => {
  const [TeamName, setTeamName] = useState('');
  const [teamLead, setTeamLead] = useState('');
  const [teamNames, setTeamNames] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and process the form data
    if (TeamName.trim() === '' || teamLead.trim() === '' || teamNames.trim() === '') {
      alert('Please enter Team name, team lead, and team names.');
      return;
    }

    // Process the team names to extract individual teams
    const teamNamesArray = teamNames.split(',').map((team) => team.trim());

    // Process the team lead and users to extract individual members
    const userListArray = teamLead.split(',').map((user) => user.trim());
    setUsers(userListArray);

    // Clear the form fields after submission
    setTeamName('');
    setTeamLead('');
    setTeamNames('');

    // Close the Team form
    onClose();
  };

  return (
    <div className="Team-form">
      <h2>Create New Team</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="TeamName">Team Name</label>
          <input
            type="text"
            id="TeamName"
            value={TeamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="teamLead">Team Lead</label>
          <textarea
            id="teamLead"
            value={teamLead}
            onChange={(e) => setTeamLead(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="teamNames">Team Members (comma-separated):</label>
          <textarea
            id="teamNames"
            value={teamNames}
            onChange={(e) => setTeamNames(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Team</button>
      </form>

      {/* <div className="user-list">
        <h3>User List:</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Team;

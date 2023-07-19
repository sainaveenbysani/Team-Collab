import React, { useState, useContext } from 'react';
import './Team.css';
import { AuthContext } from '../../Shared/context/auth-context';
import { useHttpClient } from '../../Shared/hooks/http-hook';

const Team = ({ onClose }) => {
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttpClient();
  const [teamName, setTeamName] = useState('');
  const [teamLead, setTeamLead] = useState('');
  const [teamMembers, setTeamMembers] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate and process the form data
    if (teamName.trim() === '' || teamLead.trim() === '' || teamMembers.trim() === '') {
      alert('Please enter Team name, team lead, and team Members.');
      return;
    }
    const newTeam = {
      teamName,
      teamLead,
      teamMembers
    };
    try {
      console.log(newTeam);
      const response = await sendRequest (
        'http://localhost:3001/api/teams', 
        'POST',
        JSON.stringify(newTeam),
        {
          'Content-Type' : 'application/json'
        }
      );
      console.log(response);
      }
      catch(err) {
        console.log(err);
      }

    // Clear the form fields after submission
    setTeamName('');
    setTeamLead('');
    setTeamMembers('');

    // Close the Team form
    onClose();
  };

  return (
    <div className="Team-form">
      <h2>Create New Team</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="teamName">Team Name</label>
          <input
            type="text"
            id="teamName"
            value={teamName}
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
          <label htmlFor="teamMembers">Team Members (comma-separated):</label>
          <textarea
            id="teamMembers"
            value={teamMembers}
            onChange={(e) => setTeamMembers(e.target.value)}
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

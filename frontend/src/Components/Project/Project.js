import React, { useState } from 'react';
import './Project.css';


const Project = () => {
  const [projectName, setProjectName] = useState('');
  const [userList, setUserList] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and process the form data
    if (projectName.trim() === '' || userList.trim() === '') {
      alert('Please enter project name and user list details.');
      return;
    }

    // Process the user list to extract individual users
    const userListArray = userList.split(',').map((user) => user.trim());
    setUsers(userListArray);

    // Clear the form fields after submission
    setProjectName('');
    setUserList('');
  };

  return (
    <div className="project-form">
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="userList">User List (comma-separated):</label>
          <textarea
            id="userList"
            value={userList}
            onChange={(e) => setUserList(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Project</button>
      </form>

      <div className="user-list">
        <h3>User List:</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;

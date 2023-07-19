import React, { useState } from 'react';
import Task from '../Task/Task.js';
import Team from '../Team/Team.js';
import './Dashboard.css';

const Dashboard = () => {
  const [isTaskPopupOpen, setTaskPopupOpen] = useState(false);
  const [isTeamPopupOpen, setTeamPopupOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('All');
  const [selectedTeam, setSelectedTeam] = useState('');
  const tabs = ['All', 'To-do', 'Complete', 'Approve'];
  const Teams = ['Team A', 'Team B', 'Team C'];
  const tasks = [
    { id: 1, name: 'Task 1', status: 'To-do', Team: 'Team A' },
    { id: 2, name: 'Task 2', status: 'Complete', Team: 'Team B' },
    { id: 3, name: 'Task 3', status: 'To-do', Team: 'Team C' },
    { id: 4, name: 'Task 4', status: 'Approve', Team: 'Team A' },
    { id: 5, name: 'Task 5', status: 'Complete', Team: 'Team C' },
    { id: 6, name: 'Task 6', status: 'To-do', Team: 'Team B' },
  ];

  const openTaskPopup = () => {
    setTaskPopupOpen(true);
  };

  const closeTaskPopup = () => {
    setTaskPopupOpen(false);
  };

  const openTeamPopup = () => {
    setTeamPopupOpen(true);
  };

  const closeTeamPopup = () => {
    setTeamPopupOpen(false);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
  };

  const filteredTasks = tasks.filter((task) => {
    if (selectedTab === 'All' && selectedTeam === '') {
      return true; // Show all tasks when no tab or team is selected
    } else if (selectedTab === 'All' && selectedTeam !== '') {
      return task.Team === selectedTeam; // Filter by selected team only
    } else if (selectedTab !== 'All' && selectedTeam === '') {
      return task.status === selectedTab; // Filter by selected tab only
    } else {
      return (
        task.status === selectedTab && task.Team === selectedTeam
      ); // Filter by both selected tab and team
    }
  });

  const handleOverlayClick = (event) => {
    if (!event.target.closest('.popup-center')) {
      closeTaskPopup();
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <button className="create-team-button" onClick={openTeamPopup}>
          Create Team
        </button>
        <ul className="Team-list">
          {Teams.map((team) => (
            <li
              key={team}
              onClick={() => handleTeamClick(team)}
              className={selectedTeam === team ? 'active' : ''}
            >
              {team}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <div className="topbar">
          <button className="create-task-button right-corner" onClick={openTaskPopup}>
            {isTaskPopupOpen ? 'Close Task' : 'Create Task'}
          </button>
        </div>
        <div className="tab-bar">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${selectedTab === tab ? 'active' : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="task-table">
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                  <td>{task.Team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isTeamPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-center">
            <Team onClose={closeTeamPopup} />
          </div>
        </div>
      )}
      {isTaskPopupOpen && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup-center">
            <Task onClose={closeTaskPopup} />
          </div>
        </div>
      )}
      <footer>
        <p>&copy; 2023</p>
      </footer>
    </div>
  );
};

export default Dashboard;


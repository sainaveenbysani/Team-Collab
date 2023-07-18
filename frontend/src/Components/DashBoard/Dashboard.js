import React, { useState } from 'react';
import Task from '../Task/Task.js';
import Team from '../Team/Team.js';
import './Dashboard.css';

const Dashboard = () => {
  const [isTaskPopupOpen, setTaskPopupOpen] = useState(false);
  const [isTeamPopupOpen, setTeamPopupOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('All');
  const tabs = ['All', 'To-do', 'Complete', 'Approve'];
  const projects = ['Project A', 'Project B', 'Project C'];
  const tasks = [
    { id: 1, name: 'Task 1', status: 'To-do', project: 'Project A' },
    { id: 2, name: 'Task 2', status: 'Complete', project: 'Project B' },
    { id: 3, name: 'Task 3', status: 'To-do', project: 'Project C' },
    { id: 4, name: 'Task 4', status: 'Approve', project: 'Project A' },
    { id: 5, name: 'Task 5', status: 'Complete', project: 'Project C' },
    { id: 6, name: 'Task 6', status: 'To-do', project: 'Project B' },
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

  const filteredTasks =
    selectedTab === 'All'
      ? tasks
      : tasks.filter((task) => task.status === selectedTab);

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
        <ul className="project-list">
          {projects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      </div>
      <div className="content">
        <div className="topbar">
          <button className="create-task-button" onClick={openTaskPopup}>
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
                <th>Project</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                  <td>{task.project}</td>
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

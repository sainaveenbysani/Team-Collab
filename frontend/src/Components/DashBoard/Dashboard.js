import React, { useState } from 'react';
import Task from '../Task/Task.js';
import Team from '../Team/Team.js'; // Assuming the path to the Team.js file

const Dashboard = () => {
  const [isTaskPopupOpen, setTaskPopupOpen] = useState(false);
  const [isTeamPopupOpen, setTeamPopupOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState('To-do');
  const panels = ['To-do', 'Complete', 'Approve'];

  const openTaskPopup = () => {
    setTaskPopupOpen(true);
  };

  const closeTaskPopup = () => {
    setTaskPopupOpen(false);
  };

  const handleDropdownChange = (event) => {
    setSelectedDropdown(event.target.value);
  };

  const openTeamPopup = () => {
    setTeamPopupOpen(true);
  };

  const closeTeamPopup = () => {
    setTeamPopupOpen(false);
  };

  return (
    <div className="dashboard">
      <header>
        <h1>Dashboard</h1>
      </header>
      <div className="topbar">
        <button className="create-task-button" style={{ float: 'right' }} onClick={openTaskPopup}>
          {isTaskPopupOpen ? 'Close Task' : 'Create Task'}
        </button>
        <button className="create-Team-button" style={{ float: 'left' }} onClick={openTeamPopup}>
          Create Team
        </button>
      </div>
      <div className="dropdown-menu">
        <select value={selectedDropdown} onChange={handleDropdownChange}>
          {panels.map((panel) => (
            <option key={panel} value={panel}>
              {panel}
            </option>
          ))}
        </select>
      </div>
      <div className="task-columns">
        {selectedDropdown === 'To-do' && (
          <div className="task-column">
            <h3>{selectedDropdown} Tasks</h3>
            {/* Render To-do tasks */}
          </div>
        )}
        {selectedDropdown === 'Complete' && (
          <div className="task-column">
            <h3>{selectedDropdown} Tasks</h3>
            {/* Render Complete tasks */}
          </div>
        )}
        {selectedDropdown === 'Approve' && (
          <div className="task-column">
            <h3>{selectedDropdown} Tasks</h3>
            {/* Render Approve tasks */}
          </div>
        )}
      </div>
      {isTeamPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-center">
            <Team onClose={closeTeamPopup} />
          </div>
        </div>
      )}
      {isTaskPopupOpen && <Task onClose={closeTaskPopup} />}
      <footer>
        <p>Copyright © 2023</p>
      </footer>
      {/* {isTaskPopupOpen && <Task onClose={closeTaskPopup} />} */}
    </div>
  );
};


export default Dashboard;

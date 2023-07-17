import Task from '../Task/Task.js';
import React, { useState } from 'react';
import Project from '../Project/Project.js'; // Assuming the path to the Project.js file

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [], // Array to hold the user's projects
      isTaskPopupOpen: false, // State to control the Task popup
      selectedDropdown: 'To-do', // Selected dropdown value
      panels: ['To-do', 'Complete', 'Approve'], // Array of panels
      isProjectPopupOpen: false, // State to control the Project popup
    };
  }

  openTaskPopup = () => {
    this.setState((prevState) => ({
      isTaskPopupOpen: !prevState.isTaskPopupOpen,
    }));
  };

  handleDropdownChange = (event) => {
    this.setState({ selectedDropdown: event.target.value });
  };

  openProjectPopup = () => {
    this.setState((prevState) => ({
      isProjectPopupOpen: !prevState.isProjectPopupOpen,
    }));
  };

  render() {
    const { isTaskPopupOpen, selectedDropdown, panels, isProjectPopupOpen } = this.state;

    return (
      <div className="dashboard">
        <header>
          <h1>Dashboard</h1>
        </header>
        <div className="topbar">
          <button className="create-task-button" style={{ float: 'right' }} onClick={this.openTaskPopup}>
            {isTaskPopupOpen ? 'Close Task' : 'Create Task'}
          </button>
          <button className="create-project-button" style={{ float: 'left' }} onClick={this.openProjectPopup}>
            Create Project
          </button>
        </div>
        <div className="dropdown-menu">
          <select value={selectedDropdown} onChange={this.handleDropdownChange}>
            {panels.map((panel) => (
              <option key={panel} value={panel}>
                {panel}
              </option>
            ))}
          </select>
        </div>
        <div className="task-columns">
          {/* ... Render tasks based on selectedDropdown ... */}
        </div>
        <footer>
          <p>Copyright © 2023</p>
        </footer>
        {isTaskPopupOpen && <Task onClose={this.openTaskPopup} />}
        {isProjectPopupOpen && <Project />} {/* Render Project popup */}
      </div>
    );
  }
}

export default Dashboard;

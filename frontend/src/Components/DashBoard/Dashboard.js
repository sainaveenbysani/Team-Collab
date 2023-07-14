import Task from '../Task/Task.js';
import React,{useState} from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [], // Array to hold the user's projects
      isTaskPopupOpen: false, // State to control the Task popup
      selectedDropdown: 'To-do', // Selected dropdown value
      panels: ['To-do', 'Complete', 'Approve'], // Array of panels
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

  render() {
    const { isTaskPopupOpen, selectedDropdown, panels } = this.state;

    return (
      <div className="dashboard">
        <header>
          <h1>Dashboard</h1>
        </header>
        <div className="topbar">
          <button className="create-task-button" style={{ float: 'Right' }} onClick={this.openTaskPopup}>
            {isTaskPopupOpen ? 'Close Task' : 'Create Task'}
          </button>
          <button className="create-project-button" style={{ float: 'left' }}>
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
        <footer>
          <p>Copyright © 2023</p>
        </footer>
        {isTaskPopupOpen && <Task onClose={this.openTaskPopup} />}
      </div>
    );
  }
}

export default Dashboard;

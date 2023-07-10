import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [], // Array to hold the user's projects
    };
  }

  render() {
    return (
      <div className="dashboard">
        <button className="create-task-button">Create Task</button>
        <button className="create-project-button">Create Project</button>
        <div className="project-list">
          <h2>Your Projects</h2>
          {this.state.projects.map((project) => (
            <div key={project.id}>{project.name}</div>
          ))}
        </div>
        <div className="task-status">
          <h2>Task Status</h2>
          {/* Add the status of the tasks here */}
        </div>
      </div>
    );
  }
}

export default Dashboard;

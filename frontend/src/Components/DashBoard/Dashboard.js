import React, { useState, useContext, useEffect } from 'react';
import Task from '../Task/Task.js';
import Team from '../Team/Team.js';
import './Dashboard.css';
import Update from '../Update/Update.js';
import { AuthContext } from '../../Shared/context/auth-context';
import { useHttpClient } from '../../Shared/hooks/http-hook';

const Dashboard = () => {
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttpClient();
  const [isTaskPopupOpen, setTaskPopupOpen] = useState(false);
  const [isTeamPopupOpen, setTeamPopupOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('All');
  const [selectedTeam, setSelectedTeam] = useState('');
  const tabs = ['All', 'To-do', 'InProgress', 'Complete', 'Approved'];
  const [teams, setTeams] = useState([]);
  const [tasks, setTasks] = useState([]); // Added state for tasks
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const storedUserName = localStorage.getItem("enteredUserName");
        const userName = JSON.parse(storedUserName);
        const response = await sendRequest(`http://localhost:3001/api/teams/user/${userName}`);
        setTeams(response.map((team) => team.teamName));
      } catch (error) {
        console.log("catch Block");
      }
    };

    const fetchTasks = async () => {
      try {
        if (selectedTeam) {
          const response = await sendRequest(`http://localhost:3001/api/task/${selectedTeam}`);
          const filteredTasksData = response.map((task) => {
            return {
              name: task.taskName,
              status: task.taskStatus,
              Team: task.teamName,
            };
          });
          setTasks(filteredTasksData);
          //setTasks(response);
        }
      } catch (error) {
        console.log("catch Block");
      }
    };

    fetchTeams();
    fetchTasks();
  }, [selectedTeam, sendRequest]);

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

  const handleTeamClick = async (team) => {
    setSelectedTeam(team);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
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
          {teams.map((team) => (
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
                <tr key={task.id} onClick={() => handleTaskClick(task)}>
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
      {selectedTask && ( // Display the Update.js pop-up when a task is selected
        <div className="popup-overlay" onClick={() => setSelectedTask(null)}>
          <div className="popup-center" onClick={(e) => e.stopPropagation()}>
            <Update task={selectedTask} onClose={() => setSelectedTask(null)} />
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

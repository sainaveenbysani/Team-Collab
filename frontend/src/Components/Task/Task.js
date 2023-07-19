import React, { useState, useContext } from 'react';
import './Task.css'; // Import the CSS file
import { AuthContext } from '../../Shared/context/auth-context';
import { useHttpClient } from '../../Shared/hooks/http-hook';

const Task = ({ onClose }) => {
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttpClient();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [teamName, setTeamName] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [taskType, setTaskType] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [approvedBy, setApprovedBy] = useState('');
  const [comments, setComments] = useState('');
  //const [attachments, setAttachments] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the captured values from the state variables above

    // Create a new task object with the captured values
    const newTask = {
      taskName,
      taskDescription,
      teamName,
      taskStatus,
      taskType,
      assignedTo,
      approvedBy,
      comments,
   //   attachments,
      priority
    };
    try {
      console.log(newTask);
      const response = await sendRequest (
        'http://localhost:3001/api/task', 
        'POST',
        JSON.stringify(newTask),
        {
          'Content-Type' : 'application/json'
        }
      );
      console.log(response);
      }
      catch(err) {
        console.log(err);
      }

    // Perform additional actions with the new task object, such as sending it to an API or updating the task list

    // Reset the form fields
    setTaskName('');
    setTaskDescription('');
    setTeamName('');
    setTaskStatus('');
    setTaskType('');
    setAssignedTo('');
    setApprovedBy('');
    setComments('');
  //  setAttachments('');
    setPriority('');

    // Close the Task form
    onClose();
  };

  return (
    <div className="container"> {/* Apply the container class */}
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Task Name:</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Task Description:</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Team Name:</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Task Status:</label>
          <select
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
            className="form-control"
          >
            <option value="">Set Status</option>
            <option value="To-do">To-do</option>
            <option value="InProgress">InProgress</option>
            <option value="Complete">Complete</option>
            <option value="Approved">Approved</option>
          </select>
        </div>

        <div className="form-group">
          <label>Task Type:</label>
          <input
            type="text"
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Assigned To:</label>
          <input
            type="text"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Approved By:</label>
          <input
            type="text"
            value={approvedBy}
            onChange={(e) => setApprovedBy(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Comments:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="form-control"
          />
        </div>
{/* 
        <div className="form-group">
          <label>Attachments:</label>
          <input
            type="text"
            value={attachments}
            onChange={(e) => setAttachments(e.target.value)}
            className="form-control"
          />
        </div> */}

        <div className="form-group">
          <label>Priority:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="form-control"
          >
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* ... Form fields ... */}
        <button type="submit" className="btn btn-primary">Add Task</button>
      </form>
    </div>
  );
}

export default Task;

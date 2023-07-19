import React, { useState, useEffect } from 'react';
import './Update.css'; // Import the CSS file

const Update= ({ onClose, taskData }) => {
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

  console.log(taskData);

  useEffect(() => {
    setTaskName(taskData.name);
    setTaskDescription(taskData.taskDescription);
    setTeamName(taskData.Team);
    setTaskStatus(taskData.status);
    setTaskType(taskData.taskType);
    setAssignedTo(taskData.assignedTo);
    setApprovedBy(taskData.approvedBy);
    setComments(taskData.comments);
    setPriority(taskData.priority);
  }, [taskData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the captured values from the state variables above

    // Create a new task object with the captured values
    const updatedTask = {
      taskName,
      taskDescription,
      teamName,
      taskStatus,
      taskType,
      assignedTo,
      approvedBy,
      comments,
      //   attachments,
      priority,
    };
    // const {
    //   taskName,
    //   taskDescription,
    //   TeamName,
    //   taskStatus,
    //   taskType,
    //   assignedTo,
    //   approvedBy,
    //   comments,
    //   priority,
    // } = taskData;

    // Perform additional actions with the new task object, such as sending it to an API or updating the task list

  //   // Reset the form fields
  //   setTaskName('');
  //   setTaskDescription('');
  //   setTeamName('');
  //   setTaskStatus('');
  //   setTaskType('');
  //   setAssignedTo('');
  //   setApprovedBy('');
  //   setComments('');
  // //  setAttachments('');
  //   setPriority('');

    // Close the Task form
    onClose();
  };

  const handleApprove = () => {
    // Handle task approval logic here
    // You can access the captured values from the state variables above
    // Update the task status or perform any other necessary actions
    console.log('Task Approved!');
  };

  return (
    <div className="container"> {/* Apply the container class */}
      <h2>Update Task</h2>
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
        <button type="submit" className="btn btn-primary">Update</button>
      </form>

      <button onClick={handleApprove} className="btn btn-success">Delete</button>
    </div>
  );
}

export default Update;

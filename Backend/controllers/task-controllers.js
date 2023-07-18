const Task = require('../models/task');
const createTask = async(req,res,next)=>{
  const taskData = req.body;
  const newTask = new Task(taskData);
  try {
    await newTask.save();
  } catch (err) {
    return res.status(500).json( { message:  err.message  });
  }
  res.status(200).json({ task: newTask.toObject({ getters: true }) });
};

const getTaskById = async (req, res, next) => {
  const taskId = req.params.id;
  try {
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while retrieving the task');
  }
};

const updateTaskById = async (req, res, next) => {
  const taskId = req.params.id;
  const updatedTaskData = req.body;
  
  try {
    const task = await Task.findByIdAndUpdate(taskId, updatedTaskData);
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    res.send(task);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while updating the task');
  }
};

const deleteTask = async (req, res, next) => {
  const taskId = req.params.id;
  
  try {
    const task = await Task.findByIdAndRemove(taskId);
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    res.send('Task deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while deleting the task');
  }
};


const getTasksByTeamAndStatus = async (req, res, next) => {
  const { teamName, taskStatus } = req.query;
  try {
    const tasks = await Task.find({ teamName, taskStatus });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while retrieving tasks');
  }
};

module.exports = {createTask, getTaskById, updateTaskById, deleteTask, getTasksByTeamAndStatus}
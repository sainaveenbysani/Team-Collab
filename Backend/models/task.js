const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');


//STEP 2: import our Schema constant
const Schema = mongoose.Schema;


const taskSchema = new Schema(
    {
        taskName: {type: String, required: true},
        taskDescription: {type: String, required: true},
        teamName: {type: String, required: true},
        taskStatus: {type: String, required: true},       
        taskType: {type: String, required: false},
        assignedTo: {type: String, required: true},
        approvedBy: {type: String, required: false},
        comments: {type: String, required: false},
        priority: {type: String, required: true}
    }
)


taskSchema.plugin(uniqueValidator); 


//STEP 5: create and export our Model 
module.exports = mongoose.model('Task', taskSchema);


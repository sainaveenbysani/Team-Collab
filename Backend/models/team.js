const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');


//STEP 2: import our Schema constant
const Schema = mongoose.Schema;

const teamSchema = new Schema(
    {
        teamName: {type: String, required: true, unique:true},
        teamLead: {type: String, required: true},
        teamMembers: { type: [String], required: true }
    }
)

teamSchema.plugin(uniqueValidator); 


//STEP 5: create and export our Model 
module.exports = mongoose.model('Team', teamSchema);


const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');


//STEP 2: import our Schema constant
const Schema = mongoose.Schema;

//STEP 3: now we want to create the User Schema
//This object will contain all properties that our new user will need
const userSchema = new Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        userName: {type: String, required: true, unique: true},       
        password: {type: String, required: true, minLength: 6},
    }
)

//STEP 4: notice that UNIQUE will create indexing, but will not validate uniquenss
//need to use "uniqueValidator" and add to our schema 
//Summary:to allow us to query EMAIL as fast as possible with UNIQUE
//AND we can only create an Email if email does not exist
userSchema.plugin(uniqueValidator); 


//STEP 5: create and export our Model 
module.exports = mongoose.model('User', userSchema);


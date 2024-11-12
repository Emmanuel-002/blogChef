 
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({


  userName: {
    type: String,
    required: [true, 'pleses enter your task title'],
  },
  email: {
    type: String,
    required: [true, 'please enter your task desciption'],
  },
  password: {
    type: String,
    required: [true, 'please enter due date'],
  },

})

module.exports = userSchema;
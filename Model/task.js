 
const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({


  titleName: {
    type: String,
    required: [true, 'pleses enter your task title'],
  },
  content: {
    type: String,
    required: [true, 'please enter your task desciption'],
  },
  duedate: {
    type: Date,
    required: [true, 'please enter due date'],
  },
  Priority: {
    type: String, 
    required: [true, 'please select level of priority'],
  },
})

titleName, content, duedate, Priority

module.exports = taskSchema;
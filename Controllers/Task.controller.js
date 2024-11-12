const Task = require('../Model/task')


module.exports.create = async (req, res) => {
  const {  titleName, content, duedate, Priority } = req.body;
  
  try {
    const newTask = await Task.create ({ titleName, content, duedate, Priority });
    res.status (201).json({ message: 'Task added Susscessfully', newTask});
  } catch(err) {
    res.status(400).json({error: err.message});
  }

};

module.exports.getAll = async (req, res) => {

  try {
    const tasks = await Task.find();
    if (!tasks) {
      return res.status (404).json({ message: 'No Task found'});
    }
    res.status(200).json({ message: 'Task retrived successfully', Task})
  } catch(err) {
    res.status(400).json({error: err.message});
  }

};

// module.exports.update = async (id){
  
// }
// module.exports.delete = async (id){

// }
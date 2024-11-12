const user = require('../Model/user')


module.exports.create = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const newUser = await Task.create ({userName, email, password });
    res.status (201).json({ message: 'User added Susscessfully', newUser});
  } catch(err) {
    res.status(400).json({error: err.message});
  }

};

module.exports.getAll = async (req, res) => {

  try {
    const user = await user.find();
    if (!user) {
      return res.status (404).json({ message: 'No user found'});
    }
    res.status(200).json({ message: 'User Id opened successfully', user})
  } catch(err) {
    res.status(400).json({error: err.message});
  }

};

// module.exports.update = async (id){
  
// }
// module.exports.delete = async (id){

// }
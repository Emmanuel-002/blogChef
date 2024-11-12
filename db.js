const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    await Mongoose.connect('mongodb+srv://brighthabila:K@aki9712@taskmaster.34y5j.mongodb.net/?retryWrites=true&w=majority&appName=TaskMaster')
    console.log('MongoDB connedted successfully');
  } catch (err) {
    console.error('Connection error:', err);
    process.exit(1);
  }
};

module.exports = {connectDB};

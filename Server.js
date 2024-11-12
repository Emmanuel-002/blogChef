const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser()); // Corrected usage
app.use(cors());
const uri = "mongodb+srv://brighthabila:WRy6CUS75t5NSfcB@cluster0.ff1fp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(uri)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(5000, () => {
            console.log('App running on port 5000');
        });
    })
    .catch(err => console.error("MongoDB connection error:", err));

// Test route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the API" });
});

module.exports = app;


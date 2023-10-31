// Backend (Node.js/Express)
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'sql9.freesqldatabase.com',
    user: 'sql9658264',
    password: 'rVzAaiiCss',
    database: 'sql9658264',
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to database', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Endpoint to save basic information
app.post('/basic-info', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO basic_info SET ?', formData, (error, results) => {
        if (error) {
            console.error('Error saving basic info:', error);
            res.status(500).send('Error saving basic info');
            return;
        }
        res.status(200).send('Basic info saved successfully');
    });
});

// Endpoint to save extended information
app.post('/extended-info', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO extended_info SET ?', formData, (error, results) => {
        if (error) {
            console.error('Error saving extended info:', error);
            res.status(500).send('Error saving extended info');
            return;
        }
        res.status(200).send('Extended info saved successfully');
    });
});
// Endpoint to handle user registration
app.post('/register', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO register SET ?', formData, (error, results) => {
        if (error) {
            console.error('Error saving registration info:', error);
            res.status(500).send('Error saving registration info');
            return;
        }
        res.status(200).send('Registration info saved successfully');
    });
});
const PORT = 3000; // Replace with your desired port number
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

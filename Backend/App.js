const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8090;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin123',
  password: 'admin',
  database: 'edevlet'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// Make the db connection available to controllers
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Import controllers
const userController = require('./DBControllers/UserController');
const userinfoController = require('./DBControllers/UserInfoController');

// Use controllers
app.use('/user', userController);
app.use('/userInfo', userinfoController);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const express = require('express');
const cors = require('cors'); 
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = new sqlite3.Database('./database.db');
app.use(bodyParser.json());
app.use(cors());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  console.log(req.body);
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Internal Server Error');
    }
    if (!row) {
      return res.status(401).send('Invalid username or password');
    }

    if (row.password !== password) {
      return res.status(401).send('Invalid username or password');
    }

    res.status(200).send('Login successful');
  });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

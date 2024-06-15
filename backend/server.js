const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;
const secretKey = 'your_secret_key'; // JWT 비밀키

// Middleware
app.use(cors());
app.use(bodyParser.json());

console.log('Initializing server...');

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dkanjfhgo0519!@',
  database: 'datadb'
});

console.log('Connecting to MySQL...');

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('MySQL Connected...');
});

console.log('Setting up middleware and routes...');

// Middleware to verify JWT token
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Register Endpoint
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  console.log('Received registration data:', { username, email, password });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], (err, result) => {
      if (err) {
        console.error('Database error:', err);
        res.status(500).send({ error: 'Database error' });
      } else {
        console.log('User registered successfully:', result);
        res.status(201).send({ message: 'User registered successfully' });
      }
    });
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).send({ error: 'Error hashing password' });
  }
});

// Login Endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Received login data:', { email, password });

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).send({ error: 'Database error' });
    } else if (results.length > 0) {
      const user = results[0];
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
        console.log('Login successful:', user);
        res.status(200).send({ message: 'Login successful', token });
      } else {
        console.log('Invalid credentials');
        res.status(401).send({ error: 'Invalid credentials' });
      }
    } else {
      console.log('Invalid credentials');
      res.status(401).send({ error: 'Invalid credentials' });
    }
  });
});

// Example of an authenticated route
app.get('/api/protected', authenticateJWT, (req, res) => {
  res.send('This is a protected route');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

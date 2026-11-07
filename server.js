const express = require('express');
const cors = require('cors');
const path = require('path'); // This helps find your HTML files
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Tell the server to look for files (like admin.html) in the main folder
app.use(express.static(__dirname));

// Route for the main URL (https://onrender.com)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Route for the admin URL (https://onrender.comadmin)
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running perfectly on port ${PORT}`);
});

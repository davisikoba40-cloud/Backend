const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 10000;

// Enable CORS so your live frontend site can connect securely
app.use(cors());
app.use(express.json());

// Basic route to check if your server works
app.get('/', (req, res) => {
  res.json({ message: "Your Render backend server is live and working!" });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running smoothly on port ${PORT}`);
});

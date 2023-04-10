const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Define static routes
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
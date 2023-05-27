const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())

// Define a route to handle the GET request for the image
app.get('/image', (req, res) => {
  // Set the appropriate headers for the response
  res.setHeader('Content-Type', 'image/jpeg');

  // Read the image file and send it as the response
  res.json({url:'https://ibb.co/Y8yZpT7'})
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

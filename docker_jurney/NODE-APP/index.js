const express = require('express');

const PORT = 4000;

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>   <p>Welcome to my Node.js app.</p>   <p>This is a simple Express server.</p> ');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js in a CICD Actions');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



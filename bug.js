const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//This code is missing error handling, which can lead to unexpected behavior and crashes if the server encounters an error during operation.  The solution below adds a more robust error handling mechanism.
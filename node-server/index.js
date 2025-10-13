const express = require('express');
const app = express();

const PORT = 8001;

app.listen(PORT, () => {
  console.log(`Node.js server listening on port ${PORT}`);
});

const express = require('express');
const gptRouter = require('./router');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', gptRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

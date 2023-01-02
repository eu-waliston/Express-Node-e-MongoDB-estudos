const express = require('express');
const chelistRouter = require('./src/routes/checklist')
const app = express();

app.use(express.json());

app.use('/checklists', chelistRouter);

app.listen(3000, () => {
    console.log(`server running!`);
})

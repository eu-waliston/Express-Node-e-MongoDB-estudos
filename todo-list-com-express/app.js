const express = require('express');
const { default: mongoose } = require('mongoose');
const chelistRouter = require('./src/routes/checklist')
require('./config/database')


const app = express();
app.use(express.json());

app.use('/checklists', chelistRouter);

app.listen(3000, () => {
    console.log(`server running!`);
})
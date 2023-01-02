const express = require('express');
const app = express();

app.use(express.json());

const log = (req,res, next) => {
    console.log(req.body);
    console.log(`data: ${Date.now()}`);
    next();
}

app.use(log)

app.get('/', (req,res) => {
    res.send('<h1>Minha Lista de tarefas</h1>')
})

app.get('/json', (req,res) => {
    console.log(req.body);
    res.json({
        title: 'Estudar MERN',
        done: true
    })
})

app.listen(3000, () => {
    console.log(`server running!`);
})

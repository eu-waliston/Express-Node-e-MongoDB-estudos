const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('<h1>Minha Lista de tarefas</h1>')
})

app.get('/json', (req,res) => {
    res.json({
        title: 'Estudar MERN',
        done: true
    })
})

app.listen(3000, () => {
    console.log(`server running!`);
})

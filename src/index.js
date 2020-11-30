const express = require('express');

const app = express();
const tasks = [];
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/tasks', (req, res) => {
    res.json(tasks);
})

app.post('/tasks', (req, res) => {
    tasks.push(req.body);
    res.json(tasks);
})

app.get('/tasks/:id', (req, res) => {
    res.json(tasks[req.params.id] || {});
})

app.delete('/tasks/:id', (req, res) => {
    res.json(tasks.splice(req.params.id, 1));
})

app.put('/tasks/:id', (req, res) => {
    tasks[req.params.id] = {...tasks[req.params.id], ...req.body};
    res.json(tasks);
})

app.listen(PORT, () => console.log('> Listening at http://localhost:' + PORT))
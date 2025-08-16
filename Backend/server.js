const express = require('express');
const app = express();

const { chats } = require('./data/data.js');



app.get('/', (req, res) => {
    res.send("API is running");
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
    res.send("Welcome to the Chat API");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
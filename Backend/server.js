const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const { chats } = require('./data/data.js');



app.get('/', (req, res) => {
    res.send("API is running");
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
    // res.send("Welcome to the Chat API");
    console.log("Chat API accessed");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
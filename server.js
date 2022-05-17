const express = require('express');
const app = express();

const port = 3000;

const magic8Ball = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
];

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.get('/greeting/:name', (req, res)=>{
        res.send(`Hello, ${req.params.name}`);
});

app.get('/tip/:total/:tipPercentage', (req, res)=>{
    res.send(`${(req.params.tipPercentage/100)*req.params.total}`);
});

app.get('/magic/:question', (req, res)=>{
    res.send(req.params.question + '? <br>' + magic8Ball[Math.floor(Math.random() * magic8Ball.length)] + '</br>')
});

app.listen(port, ()=>{
    console.log(`Express is listening for requests from port ${port}`);
});
const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.get('/greeting/:name', (req, res)=>{
        res.send(`Hello, ${req.params.name}`);
});

app.get('/tip/:total/:tipPercentage', (req, res)=>{
    res.send(`${(req.params.tipPercentage/100)*req.params.total}`);
});

app.listen(port, ()=>{
    console.log(`Express is listening for requests from port ${port}`);
});
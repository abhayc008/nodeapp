const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("Hello word from node.js app.")
});

app.get('/api/product',(req,res) => {
    res.send("Responce from product API")
});

app.get('/api/test',(req,res) => {
    res.send("Responce from product API")
});


app.listen(3000,() =>{
    console.log("server is up on 3000.")
})

const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("Hello word from node.js app.")
});

app.listen(3000,() =>{
    console.log("server is up on 3000.")
})
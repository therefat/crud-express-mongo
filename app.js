const express = require('express');
const app = express()



app.get('/',(req,res) => {
    res.send('Hello World')
})



//create server
const PORT = process.env.port || 8080;
app.listen(PORT,() => {
    console.log(`Server is Running on Port ${PORT}`)
})
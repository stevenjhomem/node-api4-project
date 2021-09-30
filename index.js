require('dotenv').config();


const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const server=express();

server.use(express.json());
server.use(cors());


server.get('/api/hello', (req, res)=>{
    res.json({
        message: "We are working with bacon grease now!"
    })
})
server.use('*',(req,res)=>{
    res.send(`<h1>Hello there!</h1>`)
})

server.use((err, req, res, next)=>{
    res.status(500).json({
        message: "Something horrible has happened",
        errorMessage: err.message
    })
})

server.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
})

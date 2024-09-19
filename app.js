const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(9998,()=>{
    console.log("Server is running");
    
})
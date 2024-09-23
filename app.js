const express = require('express')
const app = express()
app.use(express.json()); 
// app.get('/', function (req, res) {
// //   res.send('Hello World')
//   console.log(req);
// })

//SLUGS
// app.get('/employee/:id',(req,res)=>{
//     console.log(req.params.id);     
//     // res.send(req.params.id);
//     res.send()
// });

// app.get('/employee/:name',(req,res)=>{
//     console.log("name "+ req.params.name);     
//     // res.send(req.params.id);
//     res.send(req.params.name)
// });

// app.get('/employee/:id/:name',(req,res)=>{
//     // console.log("name "+ req.params.name +", id "+req.params.id);     
//     // res.send(req.params.id);
//     // res.send(req.params.name,req.params.id)
//     console.log(` Employee ID: ${req.params.id}, Employee Name: ${req.params.name}`);
//     res.send(` Employee ID: ${req.params.id}, Employee Name: ${req.params.name}`);
// });


//QUERY PARAMS
// app.post('/employee/',(req,res)=>{
//     let input=res.query;
//     // console.log(req.query);     
//     // res.send(req.query);
//     console.log(input);
//     res.send(input);
// });

// app.post('/employee', (req, res) => {
//     let input = req.query;  // Extract query parameters from the URL
//     console.log(input);     // Log the query parameters
//     res.send(input);        // Send the query parameters back in the response
// });

//PAYLOAD
app.post('/employee',(req,res)=>{
    let input=req.body;
    console.log(input);
    res.send(input);
});


app.listen(9998,()=>{
    console.log("Server is running");
    
})  
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({exteded: true}))

let numbers = [];

app.get('/calculation',(req,res)=>{
    console.log('hi from get');
    res.send(200)
    
}); 

// app.post('/calculationPost',(req,res)=>{
//     console.log('hello from post',req.body);

    
// })





app.listen(port, () => {
    console.log('Up and running on port', port);
    
});
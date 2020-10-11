const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({exteded: true}));

let numbers = [];

app.get('/calculation',(req,res)=>{
    console.log('hi from get');
    res.send(numbers);
}); 
// app.get('/actualMath',(req.res)=>{
//     console.log('hi');
    
//     res.send(numbers);
// });

app.post('/calculationPost',(req,res)=>{
    console.log('hello from post',req.body);
    numbers.push(req.body);
    res.sendStatus(200);

    
});

function actualMath(math){
    for(let i = 0; i<math.length; i++)
    if(math[i].action == 'add'){
        let answer = math[i].num1 + math[i].num2
    }
    if(math[i].action == 'subtract'){
        let answer = math[i].num1 - math[i].num2
    }
    if(math[i].action == 'multiply'){
        let answer = math[i].num1 * math[i].num2
    }
    if(math[i].action == 'divide'){
        let answer = math[i].num1 / math[i].num2
    }
    
    return answer;
}



app.listen(port, () => {
    console.log('Up and running on port', port);
    
});
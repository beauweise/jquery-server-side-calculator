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
// app.get('/actualMath',(req,res) => {
//     let numbersArry = actualMath(numbers);
//     res.send(numbersArry);
   
// });

app.post('/calculationPost',(req,res)=>{
    console.log('hello from post',req.body);
    let result = actualMath(req.body);
    numbers.push(req.body);
    res.sendStatus(200);

    
});

function actualMath(math){
    // for(let i = 0; i < math.length; i++){
    let answer ;    
    if(math.action == '+'){
            answer = Number(math.num1) + Number(math.num2)
        }
        if(math.action == '-'){
            answer = Number(math.num1) - Number(math.num2)
        }
        if(math.action == '*'){
            answer = math.num1 * math.num2
        }
        if(math.action == '/'){
            answer = math.num1 / math.num2
        }
    // }
        math.answer = answer;
    return math;
}



app.listen(port, () => {
    console.log('Up and running on port', port);
    
});
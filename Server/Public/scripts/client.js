

console.log('Hello from JS');
$(document).ready(onReady);

function onReady(){
    console.log('Hello from jquery');
    $('#equals').on('click',equals);//= button listener
    $('#addition').on('click',addition);// + button listener
    $('#subtraction').on('click',subtraction);// - button listener
    $('#multiplication').on('click',multiplication);// * button listener
    $('#division').on('click',division);// /button listener
    $('#clear').on('click',clear);// C button listener
    appendToDom();
}
let operator = "";// empty array

function clear(){//clear inputs
    $('#num1').val('');
    $('#num2').val('');
}
function addition(){//assigns + to empty array when clicked
    operator = '+';
}
function subtraction() {//assigns - to empty array when clicked
    operator = '-'; 
}
function multiplication(){//assigns * to empty array when clicked
    operator = '*';
}
function division() {//assigns / to empty array when clicked
    operator = '/';
}


function equals(){              
   
    let num1 = $('#num1').val();//input values when clicked
    let num2 = $('#num2').val();
    
    if(num1 == '' || num2 == ''|| operator == ''){// not allowing for empty inputs
        alert('Please enter all info');
        return;
    }
    $.ajax({
    method: 'POST',
    url:'/calculationPost',
    data:{// data thats being sent when numbers entered on the DOM
        num1: num1,
        num2: num2,
        action: operator
    }
}).then(function(response){// response from server
    console.log('response',response);
    getNumbers();
}).catch(function(error){
    alert(error);
});
}



function getNumbers(){
    console.log('get numbers');
    $.ajax({
        method: 'GET',
        url:'/calculation'
    }).then(function(response){
        console.log('response',response);
        appendToDom(response); // appending response from server to DOM
    }).catch(function(error){
        alert(error);
    });
    
}

function appendToDom(array){//function that what will be appended to DOM
    console.log('calcHistory',array);
    $('#calcHistory').empty();
    for(let i=0; i < array.length; i++){
    $('#calcHistory').append(`
        <li>
        ${array[i].num1}${array[i].action}${array[i].num2}=${array[i].answer}
        </li>
        `);
    $('#answer').empty();
    $('#answer').append(array[i].answer);    
    } 
}

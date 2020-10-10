

console.log('Hello from JS');
$(document).ready(onReady);

function onReady(){
    console.log('Hello from jquery');
    $('#equals').on('click',equals);
    $('#addition').on('click',addition);
    $('#subtraction').on('click',subtraction);
    $('#multiplication').on('click',multiplication);
    $('#division').on('click',division);
    
}
let operator = "";

function addition(){
    let operator = 'add';
    }
function subtraction() {
    let operator = 'subtract'; 
}
function multiplication(){
    let operator = 'multiply';
}
function division() {
    let operator = 'divide';
}


function equals(){              
   
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();
    

    console.log('numbers',num1,num2);
    if(num1 == '' || num2 == ''){
        alert('Please enter all info');
        return;
    }
    $.ajax({
    method: 'POST',
    url:'/calculationPost',
    data:{
        num1: num1,
        num2: num2,
        action: operator
    }
}).then(function(response){
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
       appendToDom(response); 
    }).catch(function(error){
        alert(error);
    });
    
}

function appendToDom(array){
    console.log('calcHistory',array);
    for(let i=0; i < array.length; i++){
    $('#calcHistory').append(`
        <li>
        dataToAppend(${array[i].num1}type ${array[i].num2})
        </li>`
        );
    } 
}

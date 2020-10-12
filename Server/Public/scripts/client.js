

console.log('Hello from JS');
$(document).ready(onReady);

function onReady(){
    console.log('Hello from jquery');
    $('#equals').on('click',equals);
    $('#addition').on('click',addition);
    $('#subtraction').on('click',subtraction);
    $('#multiplication').on('click',multiplication);
    $('#division').on('click',division);
    $('#clear').on('click',clear);
    
}
let operator = "";

function clear(){
    $('#num1').val('');
    $('#num2').val('');
}
function addition(){
    operator = '+';
}
function subtraction() {
    operator = '-'; 
}
function multiplication(){
    operator = '*';
}
function division() {
    operator = '/';
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
    $('#calcHistory').empty();
    for(let i=0; i < array.length; i++){
    $('#calcHistory').append(`
        <li>
        ${array[i].num1}${array[i].action}${array[i].num2}=${array[i].answer}
        </li>`
        );
    $('#answer').empty();
    $('#answer').append(array[i].answer);    
    } 
}

const { data } = require("jquery");

console.log('Hello from JS');
$(document).ready(onReady);

function onReady(){
    console.log('Hello from jquery');
    $('#equals').on('click',equals)

}

function equals(){//post function
let num1 = $('#num1').val();
let num2 = $('#num2').val();
console.log('clicked',num1,num2);
$.ajax({
    method: 'POST',
    url:'/calculationPost',
    data:{
        //incoming data
    }
})
}

function getNumbers(){
    console.log('get numbers');
    $.ajax({
        method: 'GET',
        url:'/calculation'
    }).then(function(response){
        console.log('response',response);
       //appendToDom(response); 
    });
    
}
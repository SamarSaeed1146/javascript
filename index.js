var number =prompt ("your number is even or odd")
var reminder = number % 2;
var message = "";
if (reminder == 0){
    message ="this number is even";
}else{
    message ="your number is odd";
}
alert(message)
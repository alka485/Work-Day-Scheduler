console.log("hello");
var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do"));
//Declare current time
var currentTime = moment().format("H");
console.log(currentTime);
var timeBlockEl = $("#timeBlock");
console.log(timeBlockEl);
for (var i =9 ; i<=17;i++){

     var key ="hour-"+i;
     console.log(key);
     if(i>currentTime)
     {
        console.log("future time");
     }
     else if(i<currentTime){
        console.log("past time");
     }
     else{
        console.log("current time");
     }
     

}
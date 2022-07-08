var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do"));
//Declare current time
var currentTime = moment().format("H");
//console.log(currentTime);
var timeBlockEl = $("#timeBlock");

// $(".saveBtn").on("click" , function(){
//     //console.log("save");
//     //console.log(this);
//     var text = $(this).siblings(".description").val();
//     console.log(text);
//     var time = $(this).siblings(".hour").text();
//     console.log(time);
//     localStorage.setItem(time,text);
    
    
// });

// $("#hour-9").val(localStorage.getItem("9AM"));
// $("#hour-10").val(localStorage.getItem("10AM"));
// $("#hour-11").val(localStorage.getItem("11AM"));
// $("#hour-12").val(localStorage.getItem("12PM"));
// $("#hour-1").val(localStorage.getItem("1PM"));
// $("#hour-2").val(localStorage.getItem("2PM"));
// $("#hour-3").val(localStorage.getItem("3PM"));
// $("#hour-4").val(localStorage.getItem("4PM"));
// $("#hour-5").val(localStorage.getItem("5PM"));
 

function saveEvent(){
for (var i =9 ; i<=12;i++){
     var key ="hour-"+i;
     //console.log(key);
     var template = $(`<div class = "row"><div class ="hour w-25 p-4 col-1">${i}${i<12?'AM':'PM'}</div><textarea id="hour-${i}" class ="description w-50 p-4 col-10"></textarea><button data-hour='+i+' class="saveBtn w-25 p-2 col-1 fas fa-save fa-2x"></button></div><p></p>`);
    var data = "sdf"
      //console.log (template);
    timeBlockEl.append(template);
    if(i>currentTime){
        //console.log("future time");
        template.removeClass("past");
        template.removeClass("future");
        template.addClass("future");
    } else if(i<currentTime) {
        //console.log("past time");
        template.removeClass("future");
        template.removeClass("present");
        template.addClass("past");
     } else if(i==currentTime){
        //console.log("present time");
        template.removeClass("future");
        template.removeClass("past");
        template.addClass("present");
    }      
}
for (var i =1 ; i<=5;i++){
    var key ="hour-"+i;
    //console.log(key);
    var template = $(`<div class = "row"><div class ="hour w-25 p-4 col-1">${i}PM</div><textarea id="hour-${i}"  class ="description w-50 p-4 col-10"></textarea><button data-hour='+i+' class="saveBtn w-25 p-2 col-1 fas fa-save fa-2x"></button></div><p></p>`);
   var data = "sdf"
     //console.log (template);
   timeBlockEl.append(template);
   if(i+12>currentTime){
       //console.log("future time");
       template.removeClass("past");
       template.removeClass("future");
       template.addClass("future");
   } else if(i+12<currentTime) {
       //console.log("past time");
       template.removeClass("future");
       template.removeClass("present");
       template.addClass("past");
    } else if(i+12==currentTime){
       //console.log("present time");
       template.removeClass("future");
       template.removeClass("past");
       template.addClass("present");
   }      
}

$("#hour-9").val(localStorage.getItem("9AM"));
$("#hour-10").val(localStorage.getItem("10AM"));
$("#hour-11").val(localStorage.getItem("11AM"));
$("#hour-12").val(localStorage.getItem("12PM"));
$("#hour-1").val(localStorage.getItem("1PM"));
$("#hour-2").val(localStorage.getItem("2PM"));
$("#hour-3").val(localStorage.getItem("3PM"));
$("#hour-4").val(localStorage.getItem("4PM"));
$("#hour-5").val(localStorage.getItem("5PM"));

$(".saveBtn").on("click" , function(){
    //console.log("save");
    //console.log(this);
    var text = $(this).siblings(".description").val();
    console.log(text);
    var time = $(this).siblings(".hour").text();
    console.log(time);
    localStorage.setItem(time,text);
    
    
});
 
}


saveEvent();


    
  

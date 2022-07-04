var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do"));
//Declare current time
var currentTime = moment().format("H");
var timeBlockEl = $("#timeBlock");

for (var i =9 ; i<=17;i++){
     var key ="hour-"+i;
     console.log(key);
     var template = 
    $('<div class = "row"><div class ="hour w-25 p-4 col-1">'+i+'AM</div><textarea class ="description w-50 p-4 col-10"></textarea><button data-hour='+i+' class="saveBtn w-25 p-2 col-1 fas fa-save fa-2x"></button></div><p></p>');
    var data = "sdf"
      console.log (template);
    timeBlockEl.append(template);
    if(i>currentTime){
        console.log("future time");
        template.removeClass("past");
        template.removeClass("future");
        template.addClass("future");
    } else if(i<currentTime) {
        console.log("past time");
        template.removeClass("future");
        template.removeClass("present");
        template.addClass("past");
     } else if(i==currentTime){
        console.log("present time");
        template.removeClass("future");
        template.removeClass("past");
        template.addClass("present");
    }      
}
var printEvent = function(descr){



}

$(".saveBtn").on("click" , function(){
    console.log("save");
    console.log(this);
    var text = $(this).siblings(".description").val();
    console.log(text);
    //var time = $(this).parent().attr("hour");
    var time = $(this).siblings(".hour").text();
    console.log(time);
    localStorage.setItem(time,text);
});
    

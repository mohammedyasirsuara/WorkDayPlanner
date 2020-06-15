$("#currentDay").text(moment().format('MMMM Do YYYY'));
let currentTime = moment().hour(); // assigns the current hour to currentTime variable
console.log(currentTime);

//function to convert the time to a 24hour clock
function convertString(str){
    var ampm = str.substring(str.length-2, str.length); //gets the am and pm of the string
    let time = parseInt(str.substring(0,str.length-2)); //gets and converts the string "integer" to an integer 
    
    if((ampm==="PM" && time!=12)){
        time = time + 12;
    }
    if(ampm=="AM" && time==12){
        time=0;
    }
    return time;
}

$(".currTime").each(function(){
    var currentT = convertString($(this).text()); //converts the time from a string to integer

    //get the event corresponding to a particular time from local storage
    var eventTime = localStorage.getItem($(this).text()); 
    if(currentT > currentTime){
        $(this).next().addClass("future"); //adds the future class if the timeblock hour is greater than the currrent hour
    }else if(currentT==currentTime){
        $(this).next().addClass("present"); //adds the present class if the timeblock hour is equal to the currrent hour
    }else{
        //adds the past class if the timeblock hour is less than the currrent hour and disables the ability to write or cahnge an event in that box
        $(this).next().addClass("past") 
        .prop( "disabled", true ); 
    }
    //sets the event 
    if(eventTime!=null){
        $(this).siblings(".plan").text(eventTime);
    }
})

$(".saveBtn").click(function(e){
    e.preventDefault();
    //saves the time and event corresponding to that time in local storage if the save button is clicked
    let time = $(this).siblings(".currTime").text();
    let event = $(this).siblings(".plan").val();
    localStorage.setItem(time, event);  
})
$("#currentDay").text(moment().format('MMMM Do YYYY'));
let currentTime = moment().hour();
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
    var currentT = convertString($(this).text());
    if(currentT > currentTime){
        $(this).next().addClass("future");
    }else if(currentT==currentTime){
        $(this).next().addClass("present");
    }else{
        $(this).next().addClass("past");
    }
})

$(".saveBtn").click(function(e){
    e.preventDefault();
})
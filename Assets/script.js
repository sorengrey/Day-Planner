
// default setting for whether or not a block has been scheduled - might not need this
var isScheduled = false;

// gets the current time and sets it to a variable
var currentTime = moment();
currentTime = currentTime.format('LT');

// the array of objects for local storage, leaving the event open by default
// var daySchedule = [
//     {hour: "9 am",
//     event: ""},

//     {hour: "10 am",
//     event: ""},

//     {hour: "11 am",
//     event: ""},

//     {hour: "12 pm",
//     event: ""},

//     {hour: "1 pm",
//     event: ""},

//     {hour: "2 pm",
//     event: ""},

//     {hour: "3 pm",
//     event: ""},

//     {hour: "4 pm",
//     event: ""},

//     {hour: "5 pm",
//     event: ""}
// ]

// save buttons - gets the scheduled tasks and saves them to local storage
$('.save9').click(function(){
    localStorage.setItem("9am", $("#nine").val())
})

$('.save10').click(function(){
    localStorage.setItem("10am", $("#ten").val())
})

$('.save11').click(function(){
    localStorage.setItem("11am", $("#eleven").val())
})

$('.save12').click(function(){
    localStorage.setItem("12pm", $("#twelve").val())
})

$('.save1').click(function(){
    localStorage.setItem("1pm", $("#one").val())
})

$('.save2').click(function(){
    localStorage.setItem("2pm", $("#two").val())
})

$('.save3').click(function(){
    localStorage.setItem("3pm", $("#three").val())
})

$('.save4').click(function(){
    localStorage.setItem("4pm", $("#four").val())
})

$('.save5').click(function(){
    localStorage.setItem("5pm", $("#five").val())
})

// variable for whether or not thedivhour and current hour match, returns a boolean
var theDivHour; //use parseInt to get the integer from the string in the div's id(?)

var inTheHour; //moment('thedivhour').isSame('currentTime', 'hour');

//variable for a div in the past, returns a boolean
var inThePast; //moment('thedivhour').isBefore('currentTime', 'hour')

//variable for a div in the future, returns a boolean
var inTheFuture; //moment('thedivhour').isAfter('currentTime', 'hour') 

// prevents the user from scheduling events in the gray divs -- untested
$("#past").on('click', function(){
    alert('Events cannot be scheduled in the past.')
    // needs to disable the text area (check Bootstrap for disabled textarea classname)
})


// color code functionality -- (hour is just a placeholder param)
//function colorCode(hour) {

// if inThePast = true, the classname is set to #past with .attr

// if inTheHour = true, the classname is set to #present with .attr

// if inTheFuture = true, the classname is set to #future with .attr
// }
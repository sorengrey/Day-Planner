// array of div ids as strings (to be matched against numHours)
var divNames = ['nine','ten','eleven','twelve','one','two','three','four','five']

// array of hours in military time (to match a numerical value to divNames's strings)
var numHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

// the current hour in military time
var thisHour = moment().format("H");

// loop through divNames
 for (i=0; i < divNames.length; i++){
    // if the div's number is higher than the current hour, add the classname 'past' to the div with the matching class
    if(numHours[i] < thisHour) {
        $('#' + divNames[i]).addClass('past')
    // if the div's number is lower than the current hour, add the classname 'future' to the div with the matching class
    } else if(numHours[i] > thisHour) {
        $('#' + divNames[i]).addClass('future')
    // in all other cases, add the classname 'present' to the remaining class
    } else {
        $('#' + divNames[i]).addClass('present')
    }
 }

// writes saved tasks to the textarea in case of accidental refreshes
$("#nine").text(localStorage.getItem("9am"))
$("#ten").text(localStorage.getItem("10am"))
$("#eleven").text(localStorage.getItem("11am"))
$("#twelve").text(localStorage.getItem("12pm"))
$("#one").text(localStorage.getItem("1pm"))
$("#two").text(localStorage.getItem("2pm"))
$("#three").text(localStorage.getItem("3pm"))
$("#four").text(localStorage.getItem("4pm"))
$("#five").text(localStorage.getItem("5pm"))

// save buttons - saves the tasks to local storage when clicked
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

// checks to make sure the user wants to schedule in a gray timeblock
$("#past").on('click', function(){
    alert('Are you sure you want to schedule a task in the past?')
})



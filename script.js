// Applying Date and Day Data and displaying using jquery and moment.js combined.
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Jquery Function creation for defining defined variables, loops, objects, strings and call backs through local storage"
$(document).ready(function() {
    // event listener on click targeting save button
    $('.saveBtn').on('click', function(){
        // text area data in description class on index.html
        var data = $(this).siblings('.description').val()
        // getting the id information from time block
        var time = $(this).parent().attr('id');
        // saving to local storage
        localStorage.setItem(time, data);
    });
    // looping based on past present future time in reference to the time block
    function hourTracker() {
        // uses UK / Military time 0-23 because 1 = 0 as starting index number
        var currentHour = moment().hours()
        $('.time-block').each( function(){
           var blockHour = parseInt($(this).attr('id').split('hour-')[1])

        // past time
        if (blockHour < currentHour) {
            $(this).children('textarea').addClass('past');
        }
        // present time
        else if (blockHour === currentHour) {
            $(this).children('textarea').removeClass('past');
            $(this).children('textarea').addClass('present');
        }
        // future time
        else {
            $(this).children('textarea').removeClass('past');
            $(this).children('textarea').removeClass('present');
            $(this).children('textarea').addClass('future');
        }
        }) 
    }
    hourTracker();
   //Updating the tracker on the basis of 1000 ms = 1 second
    setInterval(hourTracker,1000);
    // loading data from storage so it exists when you re-open
    $('.time-block').each( function (){
        var id = $(this).attr('id')
        $(this).children('textarea').val(localStorage.getItem(id))
    })
});
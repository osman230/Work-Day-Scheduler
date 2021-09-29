

// Current day function
var currentHour = moment().hours();
$("#currentDay").text(moment().format("dddd, MMMM Do"));


// save button function
$(".saveBtn").on("click", function() {
    var hour = $(this).parent().attr("data-hour");
    var description = $(this).siblings(".description").val();

    localStorage.setItem(hour, description);
})

// color blocks
function checkHour() {
    $(".time-block").each(function() {
        var hour = parseInt($(this).attr("data-hour"));

        if (hour < currentHour) {
            $(this).addClass("past");
        } else if (hour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}


// local storage
function checkStorage() {
    $(".time-block").each(function() {
        var hour = $(this).attr("data-hour");
        $(this).children(".description").val(localStorage.getItem(hour));
    })
}

checkHour();
checkStorage();

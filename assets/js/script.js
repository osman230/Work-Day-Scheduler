
var currentTime = moment().hours();
$("#currentDate").text(moment().format("dddd, MMMM Do"));


// color blocks
function timeBlock() {
    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour < currentTime) {
            $(this).addClass("past");
        } else if (currentHour === currentTime) {
            $(this).removeClass("past").addClass("present");            
        } else if (currentHour > currentTime) {
            $(this).removeClass("past").removeClass("present").addClass("future");
            
        }
    })
}

// save button function
$(".saveBtn").on("click", function() {
    var currentHour = $(this).parent().attr("id");
    var currentTask = $(this).siblings(".currentTask").val();

    localStorage.setItem(currentHour, currentTask);
})



// local storage
function saveLocally() {
    $(".time-block").each(function() {
        var currentHour = $(this).attr("id");
        $(this).children(".currentTask").val(localStorage.getItem(currentHour));
    })
}

timeBlock();
saveLocally();

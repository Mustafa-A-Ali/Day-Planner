var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
var time = moment();

var date = $('#currentDay');

date.text(moment().format("MMMM Do YYYY, h:mm a"));



function setPlanner() {

    $(".time-blocks").each(function () {
        var id = $(this).attr("id");
        var description = localStorage.getItem(id);

        if (description !== null) {
            $(this).children(".description").val(description);
        }
    });
}

setPlanner();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
    console.log(description, time)

    localStorage.setItem(time, description)

});


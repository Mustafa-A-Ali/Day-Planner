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
        console.log(id);
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".description").val(schedule);
        }
    });
}

setPlanner();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".description").val();

    localStorage.setItem(time, schedule);
});



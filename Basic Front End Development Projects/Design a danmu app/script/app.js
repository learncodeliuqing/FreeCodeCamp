$(document).ready(function() {
    var colorArray = ['red', 'yellow', 'orange', 'green', 'blue'];
    var relativePositionArray = ["10px", "40px", "80px", "160px", "320px"];
    $("#launch").on("click", function() {
        var number = Math.floor(Math.random() * colorArray.length);
        var text = $("input").val();
        $('input').val('');
        var screenWidth = $("#dms").width();
        console.log(screenWidth);
        $("#dms").append("<span>" + text + "</span> ");
        $("#dms").children().last().css({ "color": colorArray[number], "position": "absolute", "top": relativePositionArray[number], "right": "0px", "font-size": "34px" }).animate({ right: screenWidth, opacity: "0" }, 3000);

    });
    $("#clear").on("click", function() {
        // $("span").remove();
        $("#dms").children().remove();
    })

});
$(document).ready(function () {

    // 基本特效
    // .hide()  .show()  .toggle()
    $("#hidr").click(function () {
        $("#hideId span:last-child").hide("fast", function () {
            $(this).prev().hide("fast", arguments.callee);
        });
    });

    $("#showr").click(function () {
        $("#hideId span").show(2000);
    });

    $("#showId button").click(doIt);

    $("#showId form").submit(function () {
        if ($("#showId input").val() == "yes") {
            $("#pId").show(4000, function () {
                $(this).text("Ok, DONE! (now showing)");
            });
            return false;
        } else {
            alert("input error!");
            return false;
        }

        $("#showId span,div").hide("fast");
    });

    $("#toggleId button").click(function () {
        $("#toggleId p").toggle("slow");
    });

});

function doIt() {
    $("#showId span,div").show("slow");
}
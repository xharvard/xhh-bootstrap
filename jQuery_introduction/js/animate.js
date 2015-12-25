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

    // 自定义



    // 渐变
    // .fadeIn()  .fadeOut()  .fadeTo()  .fadeToggle()
    $("#fadeId span").click(function () {
        $("#fadeId div:hidden:first").fadeIn("slow");
    });

    $("#fadeId p:first").click(function () {
        $(this).fadeOut(3000);
    });

    $("#fadeId p:last").click(function () {
        $(this).fadeTo("slow", 0.33);
    });

    $("#fadeId button").click(function () {
        $(this).next().fadeToggle(2000, "linear");
    });

    // 滑动
    // .slideDown()  .slideUp()  .slideToggle()
    $("#slideId div").click(function () {
        $(this).css({borderStyle: "inset", cursor: "wait"});
        $("#slideId input").slideDown(2000, function () {
            $(this).css("border", "2px red inset").filter(".middle").css("background", "yellow").focus();
            $("#slideId div").css("visibility", "hidden");
        });
    });
    
    $("#slideUpId p").click(function () {
        $("#slideUpId div").slideUp(2000);
    });

    $("#slideToggleId button").click(function(){
        $("#slideToggleId p").slideToggle(3000);
    });

});

function doIt() {
    $("#showId span,div").show("slow");
}
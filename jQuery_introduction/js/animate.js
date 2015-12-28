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
    // .animate()
    $("#go").click(function () {
        $("#block").animate({
            width: "70%",
            opacity: .4,
            marginLeft: "0.6in",
            fontSize: "2em",
            borderWidth: "10px"
        }, 2000);
    });

    $("#right").click(function () {
        $(".block").animate({
            left: "+=50px"
        }, "slow");
    });

    $("#left").click(function () {
        $(".block").animate({
            left: "-=50px"
        }, "slow");
    });

    // .delay()
    $("#run").click(function () {
        $(".first").slideUp(300).delay(800).slideDown(400);
        $(".second").slideUp(300).slideDown(400);
    });

    // .dequeue()
    $("#start").click(function () {
        $(".dequeueDiv").animate({
            left: "+=200px"
        }, 2000);
        $(".dequeueDiv").animate({
            top: "0px"
        }, 600);
        $(".dequeueDiv").queue(function () {
            $(this).toggleClass("redDiv");
            $(this).dequeue();
        });
        $(".dequeueDiv").animate({
            left: "10px",
            top: "30px"
        }, 700);
    });

    // .queue()
    $("#queueId").click(function () {
        var div = $("#queueDiv");
        div.show("slow");
        div.animate({
            left: "+=200px"
        }, 2000);
        div.queue(function () {
            $(this).addClass("newColor");
            $(this).dequeue();
        });
        div.animate({
            "left": "-=200px"
        }, 500);
        div.queue(function () {
            $(this).removeClass("newColor");
            $(this).dequeue();
        });
        div.slideUp();
    });

    // jQuery.fx.interval
    jQuery.fx.interval = 100;
    $("#intervalId").click(function () {
        $("#intervalDiv").toggle(3000);
    });

    // jQuery.fx.off
    var toggleFx = function () {
        $.fx.off = !$.fx.off;
    };

    $("#offBtnId").click(toggleFx);
    $("#offId").click(function () {
        $(".offDiv").toggle("slow");
    });

    // .stop()
    $("#go1").click(function () {
        $(".block1").animate({left: '+=100px'}, 2000);
    });

    $("#stop").click(function () {
        $(".block1").stop();
    });

    $("#back").click(function () {
        $(".block1").animate({left: '-=100px'}, 2000);
    });

    // .clearQueue()
    $("#start1").click(function () {
        var myDiv = $("#clearDiv");
        myDiv.show("slow");
        myDiv.animate({
            left: "+=200px"
        }, 5000);

        myDiv.queue(function () {
            var _this = $(this);
            _this.addClass("newClearDIvColor");
            _this.dequeue();
        });

        myDiv.animate({left: '-=200'}, 1500);
        myDiv.queue(function () {
            var _this = $(this);
            _this.removeClass("newClearDIvColor");
            _this.dequeue();
        });
        myDiv.slideUp();
    });

    $("#clear").click(function () {
        var myDiv = $("#clearDiv");
        myDiv.clearQueue();
        myDiv.stop();
    });


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

    $("#slideToggleId button").click(function () {
        $("#slideToggleId p").slideToggle(3000);
    });

});

function doIt() {
    $("#showId span,div").show("slow");
}
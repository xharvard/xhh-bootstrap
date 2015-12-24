$(document).ready(function () {

    // 浏览器事件
    // .error
    $("#book").error(function () {
        alert("Handler for .error() called.");
    });

    $("#bookAdd").click(function () {
        $("#book").attr("src", "missing.png");
    });

    // .resize()
    $(window).resize(function () {
        $("#resizeId").text("当前浏览器宽度: " + $(window).width());
    });

    // .scroll()
    $("#scrollId").scroll(function () {
        $("#scrollId p").css("color", "red");
    });


    // 文档加载
    // .load()
    $(window).load(function () {
        $("#loadId").text("文档加载完成");
    });

    // .ready()
    $("#readyId").text("The DOM is now loaded and can be manipulated.");

    // .unload()
    $(window).unload(function () {
        alert("Bye now!");
    });

    // 绑定事件处理器
    // .bind()   .unbind()
    $("#bindId").bind("click", function (event) {
        var str = "(" + event.pageX + "," + event.pageY + ")";
        $("#bindSpanId").text("Click happened! " + str);
    });

    $("#bindId").bind("dblclick", function () {
        $("#bindSpanId").text("Double-click happened in " + this.nodeName);
    });

    $("#bindId").bind("mouseenter mouseleave", function () {
        $(this).toggleClass("over");
    });

    $("#customBindId").bind("myEvent", function (e, myName) {
        $(this).text(myName + ", hi there!");
        $("#customBindSpan").stop().css("opacity", 1).text("myName = " + myName).fadeIn(30).fadeOut(1000);
    });

    $("#customBindBtn").click(function () {
        $("#customBindId").trigger("myEvent", ["Kobe"]);
    });


    $("#bind1").click(function () {
        $("body").on("click", "#theone1", aClick1).find("#theone1").text("can click");
    });

    $("#unbind1").click(function () {
        $("body").off("click", "#theone1", aClick1).find("#theone1").text("Does nothing...");
    });

    // .delegate()
    $("#delegateId").delegate("p", "click", function () {
        $(this).after("<p>Another paragraph!</p>");
    });

    // .on()  .off()
    $("#bind").click(function () {
        $("body").on("click", "#theone", aClick).find("#theone").text("can click");
    });

    $("#unbind").click(function () {
        $("body").off("click", "#theone", aClick).find("#theone").text("Does nothing...");
    });

    // .one()
    var n = 0;
    $("#oneId div").one("click", function () {
        var index = $("#oneId div").index(this);
        $(this).css({
            borderStyle: "inset",
            cursor: "auto"
        });

        $("#oneId p").text("Div at index #" + index + " clicked." +
            "  That's " + ++n + " total clicks.");
    });

    // .trigger()
    $("#triggerId button:first").click(function () {
        update($("#triggerId span:first"));
    });

    $("#triggerId button:last").click(function () {
        $("#triggerId button:first").trigger("click");
        update($("#triggerId span:last"));
    });

    // .triggerHandler()
    $("#old").click(function () {
        $("#oldNewInput").trigger("focus");
    });

    $("#new").click(function () {
        $("#oldNewInput").triggerHandler("focus");
    });

    $("#oldNewInput").focus(function () {
        $("<span>Focused!</span>").appendTo("#thId").fadeOut(1000);
    });

    // 表单事件
    // .blur()
    $("#blurId").blur(function () {
        $("#blurId").val("left Field 1");
    });

    // .change()
    $("#changeId").change(function () {
        var str = "";

        $("#changeId option:selected").each(function () {
            str += $(this).text() + " ";
        });

        $("#changeDivId").text(str);
    });

    // .focus()
    $("#focusId input").focus(function () {
        $(this).next("span").css("display", "inline").fadeOut(2000);
    });

    // .focusIn()
    $("#focusInId p").focusin(function () {
        $(this).find("span").css("display", "inline").fadeOut(4000);
    });

    // .select()
    $("#selectId input").select(function () {
        $("#selectId div").text("Something was selected").show().fadeOut(1000);
    });

    // .submit()
    $("#submitId form").submit(function () {
        if ($("#submitId input:first").val() == "correct") {
            $("#submitId").find("span").text("Validated...").show();
            return true;
        }

        $("#submitId").find("span").text("Not valid!").show().fadeOut(1000);
        return false;
    });


    // 键盘事件
    // .keydown()
    $("#target").keydown(function (event) {
        if (event.which == 13) {
            event.preventDefault();
        }
        var msg = 'key code ' + event.which;

        $("#result").text(msg);
    });

    $("#other").click(function () {
        $("#target").keydown();
    });

    // 鼠标事件
    // .click()
    $("#clickId p").click(function () {
        $(this).slideUp();
    });

    // .dbclick()
    $("#dbclickId").dblclick(function () {
        $(this).css("background", "yellow");
    });

    // .hover()
    $("#hoverId li").hover(
        function () {
            $(this).append("<span style='color: red;'>***</span>");
        }, function () {
            $(this).find("span:last").remove();
        });
    
    // .mouseUp()  .mouseDown()
    $("#mouseDownId").mouseup(function () {
        $(this).append('<span style="color:#F00;">Mouse up.</span>');
    }).mousedown(function () {
        $(this).append('<span style="color:#00F;">Mouse down.</span>');
    });

    // .mouseenter() .mouseleaver() .mouseover() .mouseout()
    var i=0;
    $("#mouseId div.overout").mouseover(function () {
        $("#mouseId .overout p:first").text("mouse over");
        $("#mouseId .overout p:last").text(++i);
    }).mouseout(function () {
        $("#mouseId .overout p:first").text("mouse out");
    });

    var j=0;
    $("#mouseId div.enterleave").mouseenter(function () {
        $("#mouseId .enterleave p:first").text("mouse enter");
        $("#mouseId .enterleave p:last").text(++i);
    }).mouseleave(function () {
        $("#mouseId .enterleave p:first").text("mouse leave");
    });

    // .mousemove()
    $("#mouseMoveId div").mousemove(function (e) {
        var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
        var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
        $("#mouseMoveId span:first").text("( e.pageX, e.pageY ) : " + pageCoords);
        $("#mouseMoveId span:last").text("( e.clientX, e.clientY ) : " + clientCoords);
    });

});

function aClick1() {
    $("#show1").show().fadeOut("slow");
}

function aClick() {
    $("#show").show().fadeOut("slow");
}

function update(j) {
    var n = parseInt(j.text(), 10);
    j.text(n + 1);
}

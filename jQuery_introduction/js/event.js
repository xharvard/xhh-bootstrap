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
    // .bind()
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


});

function aClick() {
    $("#show").show().fadeOut("slow");
}

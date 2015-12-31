$(document).ready(function () {

    // class属性
    // .addClass()
    $("#addClassId p").last().addClass("selected highlight");

    // .hasClass()
    $("div#result1").append($("#hasClassId p:first").hasClass("selected").toString());
    $("div#result2").append($("#hasClassId p:last").hasClass("selected").toString());
    $("div#result3").append($("#hasClassId p").hasClass("selected").toString());

    // .removeClass()
    $("#removeClassId p:odd").removeClass("blue");

    // .toggleClass()
    $("#toggleClassId p").click(function () {
        $(this).toggleClass("highlight");
    });

    $("#toggleClassId2 p").each(function () {
        var $thisP = $(this);
        var count = 0;
        $thisP.click(function () {
            count++;
            $thisP.find("span").text("clicks: " + count);
            $thisP.toggleClass("highlight", count % 3 == 0);
        });
    });


    // 复制元素
    // .clone()
    $("#cloneId b").clone().prependTo($("#cloneId p"));

    // 插入并包裹现有内容
    // .unwrap()
    $("#unwrapId button").click(function () {
        $("#unwrapId p").unwrap();
    });

    // .wrap()
    $("#wrapId p").wrap("<div class='warpDiv'></div>");

    // .wrapAll()
    $("#wrapAllId P").wrapAll("<div class='warpDiv'></div>");

    // .wrapInner()
    $("#wrapInnerId p").wrapInner("<b></b>");

    // 插入现有元素内
    // .append()
    $("#appendId p").append("<strong>Hello</strong>");

    // .appendTo()
    $("#appendToId span").appendTo("#foo");

    // .html()
    $("#htmlId p").click(function () {
        alert($(this).html());
    });

    $("#htmlId2 div").html("<span class='red'>Hello <b>Again</b></span>");

    // .prepend()
    $("#prependId p").prepend("<b>Hello </b>");

    // .prependTo()
    $("#prependToId span").prependTo($("#foo2"));

    // .text()
    $("#textId p").click(function () {
        alert($(this).text());
    });

    $("#textId2 p").text("<b>Some</b> new text.");

    $("#textId2 ul li").text(function (index) {
        return "item number " + (index + 1);
    });

    // 插入现有元素外
    // .after()
    $("#afterId p").after(document.createTextNode("hello"));

    // .insertAfter()
    $("#insertAfterId p").insertAfter("#foo3");

    // .before()
    $("#beforeId p").before($("#beforeId b"));

    // .insertBefore()
    $("#insertBeforeId p").insertBefore("foo4");

    // DOM 移除
    // .detach()
    var p;
    $("#detachId button").on("click", function () {
        if (p) {
            $("#detachId").append(p);
            p = null;
        } else {
            p = $("#detachId p").detach();
        }
    });

    // .empty()
    $("#emptyId button").click(function () {
        $("#emptyId p").empty();
    });

    // .remove()
    $("#removeId button").click(function () {
        $("#removeId p").remove();
    });

    // DOM 替换
    // .replaceAll()
    $("<b>Paragraph. </b>").replaceAll("#replaceAllId p");

    // .replaceWith()
    $("#replaceWithId button").click(function () {
        $(this).replaceWith("<div>" + $(this).text() + "</div>");
    });

    // 通用属性操作
    // .attr()
    var title = $("#attrId em").attr("title");
    $("#attrId div").text(title);

    $("#attrId2 img").attr({
        src: "image/hat.gif",
        title: "jquery",
        alt: "jQuery logo"
    });

    $("#attrId2 div").text($("#attrId2 img").attr("alt"));

    // .prop()
    $("#propId input").change(function () {
        var input = $(this);
        $("#propId p").html(".attr('checked'): <b>" + input.attr("checked") + "</b><br>"
            + ".prop('checked'): <b>" + input.prop("checked") + "</b><br>"
            + ".is(':checked'): <b>" + input.is(":checked") + "</b><br>"
        );
    });

    $("#propId2 input").prop("disabled", true);

    // .removeAttr()
    var inputTitle = $("#remobeAttrId input").attr("title");
    $("#remobeAttrId button").click(function () {
        var input = $(this).next();

        if (input.attr("title") == inputTitle) {
            input.removeAttr("title");
        } else {
            input.attr("title", inputTitle);
        }
        $("#log").html("input title is now " + input.attr("title"));
    });

    // .removeProp()
    var para = $("#removePropId p");
    para.prop("luggageCode", 1234);
    para.append("The secret luggage code is: ", String(para.prop("luggageCode")), ".<br> ");
    para.removeProp("luggageCode");
    para.append("Now the secret luggage code is: ", String(para.prop("luggageCode")), ". ");

    // .val()
    $("#valId select").change(displayVals);
    displayVals();

    $("#valId2 input").bind("blur", function () {
        $(this).val(function (i, val) {
            return val.toUpperCase();
        });
    });

    $("#single2").val("Single2");
    $("#multiple2").val(["Multiple2", "Multiple3"]);
    $("#valId3 input").val(["check1", "check2", "radio1"]);

    // CSS 属性
    // .css()
    $("#cssId div").click(function () {
        var color = $(this).css("background-color");
        $("#result").html("That div is <span style='color:" +
            color + ";'>" + color + "</span>.");
    });

    $("#cssId2 div").click(function () {
        var html = ["The clicked div has the following styles:"];

        var styleProps = $(this).css(["width", "height", "color", "background-color"]);

        $.each(styleProps, function (prop, value) {
            html.push(prop + ":" + value);
        });

        $("#cssId2 p").html(html.join("<br>"));

    });

    $("#box").one("click", function () {
        $(this).css("width", "+=200");
    });

    $("#biger").click(function () {
        $(this).css({
            width: function (index, value) {
                return parseFloat(value) * 1.2;
            },
            height: function (index, value) {
                return parseFloat(value) * 1.2;
            }
        });
    });

    // .height()
    $("#getp").click(function () {
        showHeight("paragraph", $("#heightId p").height());
    });

    $("#getd").click(function () {
        showHeight("document", $(document).height());
    });

    $("#getw").click(function () {
        showHeight("window", $(window).height());
    });

    $("#heightId2 div").click(function () {
        $(this).height(30).css({
            cursor: "auto",
            backgroundColor: "green"
        });
    });

    // .innerHeight()  .outerHeight()
    var p = $("#innerHeightId p:first");
    $("#innerHeightId p:last").html("innerHeight: " + p.innerHeight() + "<br>"
        + "height: " + p.height() + "<br>"
        + "outerHeight(包含margin): " + p.outerHeight(true) + "<br>"
        + "outerHeight: " + p.outerHeight());

    // .width()
    $("#getpw").click(function () {
        showWidth("paragraph", $("#widthId p").width());
    });

    $("#getdw").click(function () {
        showWidth("document", $(document).width());
    });

    $("#getww").click(function () {
        showWidth("window", $(window).width());
    });

    $("#widthId2 div").one("click", function () {
        $(this).width(20).addClass("mod");
    });

    // .innerWidth()  .outerWidth()
    var p = $("#innerWidthId p:first");
    $("#innerWidthId p:last").html("innerWidth: " + p.innerWidth() + "<br>"
        + "width: " + p.width() + "<br>"
        + "outerWidth(包含margin): " + p.outerWidth(true) + "<br>"
        + "outerWidth: " + p.outerWidth());

    // .offset()
    $("*", "#offsetId").click(function (e) {
        var offset = $(this).offset();
        e.stopPropagation();

        $("#offsetResult").text(this.tagName + " coords ( " + offset.left + ", " +
            offset.top + " )");
    });

    var p1 = $("#offsetId2 p:first").offset();
    $("#offsetId2 p:nth-child(2)").text("left: " + p1.left + ", top: " + p1.top)

    var p2 = $("#offsetId2 p:last");
    p2.offset({top: p2.offset().top + 30, left: 1000});

    // .position()
    var pos = $("#positionId p:first").position();
    $("#positionId p:last").text("left: " + pos.left + ", top: " + pos.top);

    // .scrollLeft()
    $("#scrollLeftId").scroll(function () {
        $("#scrollLeftId").next("p").text("scrollLeft: " + $("#scrollLeftId").scrollLeft());
    });

    $("#scrollLeftId").parent().find("button").click(function () {
        var input = $(this).next();
        $("#scrollLeftId").scrollLeft(input.val());
    });

    // .scrollTop()
    $("#scrollTopId").scroll(function () {
        $("#scrollTopId").next("p").text("scrollTop: " + $("#scrollTopId").scrollTop());
    });

    $("#scrollTopId").parent().find("button").click(function () {
        var input = $(this).next();
        $("#scrollTopId").scrollTop(input.val());
    });

});


function displayVals() {
    var singleVals = $("#single").val();
    var multipleVals = $("#multiple").val() || [];

    $("#valId p").html("<b>Single:</b> " +
        singleVals +
        " <b>Multiple:</b> " +
        multipleVals.join(", "));
}

function showHeight(ele, h) {
    $("#heightId div").text("The height for the " + ele +
        " is " + h + "px.");
}

function showWidth(ele, w) {
    $("#widthId div").text("The width for the " + ele +
        " is " + w + "px.");
}
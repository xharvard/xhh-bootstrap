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
        if(p){
            $("#detachId").append(p);
            p = null;
        }else{
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

    //

});
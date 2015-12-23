$(document).ready(function () {

    // 属性选择器
    $("a[hreflang|='en']").css("border", "3px dotted green ");

    $('input[name*="man"]').val("has man in it!");

    $('input[name~="womn"]').val("Mr. womn in it!");

    $('input[name$="letter"]').val("a letter");

    $('input[value="Hot Fuzz"]').next().text("Hot Fuzz");

    $('#noteqId input[name!="newsletter"]').next().append("<b>;not newsletter</b>");

    $('input[name^="test"]').val("test here");

    $('#divId div[id]').one('click', function () {
        var idString = $(this).text() + "=" + $(this).attr("id");
        $(this).text(idString);
    });

    $('input[id][name$="value"]').val("only this one");


    // 基础选择器
    //$("*").css("border","3px solid red");
    $("#test").find("*").css("border", "1px solid red");

    $(".myClass").css("border", "1px solid red");

    $("address").css("border", "1px solid red");

    $("#divtest1").css("border", "1px solid red");

    $("#mutiply >div, #mutiply >span, #mutiply >p.ptest1").css("border", "1px solid red");

    // 基础过滤
    //:animated
    $("#run").click(function () {
        $(".divAnimate:animated").toggleClass("colored");
    });
    function animateIt() {
        $("#mover").slideToggle("slow", animateIt);
    }

    animateIt();

    //:eq
    // 修改第三个
    $("td:eq(2)").css("color", "red");

    $("ul.nav li:eq(1)").css("backgroundColor", "#FF0");
    $("ul.nav").each(function (index) {
        $(this).find("li:eq(1)").css("fontStyle", "italic");
    });

    // nth-child从1开始计数，并且每个ul单独计算
    $("ul.nav li:nth-child(2)").css("color", "red");

    // 倒数第二个
    $("ul.nav li:eq(-2)").addClass("foo");

    // :even
    $("#evenId tr:even").css("background-color", "#bbbbff");

    // :first
    $("#firstId tr:first").css("font-style", "italic");

    // :focus
    $("#focusId").delegate("*", "focus blur", function (event) {
        var elem = $(this);
        setTimeout(function () {
            elem.toggleClass("focused", elem.is(":focus"));
        }, 0);
    });

    // :gt
    $("#gtId td:gt(4)").css("backgroundColor", "yellow");
    $("#gtId td:gt(-2)").css("color", "red");

    // :header
    $("#headerId :header").css({
        background: '#CCC',
        color: 'blue'
    });

    // :lang
    $("#langId :lang(en-us)").addClass("usa");
    $("#langId :lang(es-es)").addClass("spain");

    // :last
    $("#lastId tr:last").css({
        backgroundColor: 'yellow',
        fontWeight: 'bolder'
    });

    // :lt
    $("#ltId td:lt(4)").css("color", "red")

    // :not
    $("#notId input:not(:checked)  + span ").css("background-color", "yellow");
    $("#notId input").attr("disabled", "disabled");

    // :odd
    $("#oddId tr:odd").css("background-color", "#bbbbff");

    // :root
    $("#rootId").html($(":root")[0].nodeName);

    // :target


    // 子元素过滤
    // :first-child
    $("#firstChildId div span:first-child")
        .css("text-decoration", "underline")
        .hover(function () {
            $(this).addClass("sogreen");
        }, function () {
            $(this).removeClass("sogreen");
        });

    // :first-of-type
    $("#firstOfTypeId span:first-of-type").addClass("fot");

    // :last-child
    $("#lastChildId div span:last-child")
        .css({color: "red", fontSize: "150%"})
        .hover(function () {
            $(this).addClass("solast");
        }, function () {
            $(this).removeClass("solast");
        });

    // :lost-of-type
    $("#lastOfTypeId span:last-of-type")
        .css({color: "red", fontSize: "150%"})
        .hover(function () {
            $(this).addClass("solast");
        }, function () {
            $(this).removeClass("solast");
        });

    // :nth-child
    $("#nthChildId ul li:nth-child(2)").append("<span style='color:blue;'> -2nd!</span>");

    $("#nthChildId2 button").click(function(){
        var str = $(this).text();
        $("#nthChildId2 tr").css("background", "white");
        $("#nthChildId2 tr" + str).css("background", "red");
        $("#inner").text(str);
    });

    // :nth-last-child
    $("#nthLastChildId ul li:nth-last-child(2)").append("<span style='color:blue;'> -2nd!</span>");

    // :nth-last-of-type
    $("#nthLastOfTypeId ul li:nth-last-of-type(2)").append("<span style='color:blue;'> -2nd!</span>");

    // :nth-of-type
    $("#nthOfTypeId span:nth-of-type(2)")
        .append( "<span> is 2nd sibling span</span>" )
        .addClass("nth");

    // :only-child
    $("#onlyChildId button:only-child").text("Alone").css("border","2px blue solid");

    // :only-of-type
    $("#onlyOfTypeId button:only-of-type").text("Alone").css("border","2px blue solid");

    // 内容过滤
    // :contains
    $("#containsId div:contains('John')").css("text-decoration","underline");

    // :empty
    $("#emptyId td:empty").text("Was empty!").css('background', 'rgb(255,220,200)');

    // :has
    $("#hasId div:has(p)").addClass("has-test");

    // :parent
    $("#parentId td:parent").fadeTo(2000,0.5);

    // 表单


});

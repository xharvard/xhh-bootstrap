$(document).ready(function () {

    // 属性选择器
    $("a[hreflang|='en']").css("border", "3px dotted green ");

    $('input[name*="man"]').val("has man in it!");

    $('input[name~="womn"]').val("Mr. womn in it!");

    $('input[name$="letter"]').val("a letter");

    $('input[value="Hot Fuzz"]').next().text("Hot Fuzz");

    $('input[name!="newsletter"]').next().append("<b>;not newsletter</b>");

    $('input[name^="test"]').val("test here");

    $('div[id]').one('click', function () {
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

});

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

    $("#nthChildId2 button").click(function () {
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
        .append("<span> is 2nd sibling span</span>")
        .addClass("nth");

    // :only-child
    $("#onlyChildId button:only-child").text("Alone").css("border", "2px blue solid");

    // :only-of-type
    $("#onlyOfTypeId button:only-of-type").text("Alone").css("border", "2px blue solid");

    // 内容过滤
    // :contains
    $("#containsId div:contains('John')").css("text-decoration", "underline");

    // :empty
    $("#emptyId td:empty").text("Was empty!").css('background', 'rgb(255,220,200)');

    // :has
    $("#hasId div:has(p)").addClass("has-test");

    // :parent
    $("#parentId td:parent").fadeTo(2000, 0.5);

    // 表单
    // :button
    var buttons = $("#buttonId :button").addClass("marked");
    $("#buttonId div").text("For this type jQuery found " + buttons.length + ".");
    $("#buttonId form").submit(function () {
        return false;
    });

    // :checkbox
    var checkboxs = $("#checkboxId input:checkbox").wrap("<span></span>").parent().css({
        background: "yellow",
        border: "3px red solid"
    });
    $("#checkboxId div").text("For this type jQuery found " + checkboxs.length + ".").css("color", "red");
    $("#checkboxId form").submit(function () {
        return false;
    });

    // :checked
    var countChecked = function () {
        var n = $("#checkedId input:checked").length;
        $("#checkedId div").text(n + (n === 1 ? " is" : " are") + "checked!");
    };
    countChecked();
    $("#checkedId input[type='checkbox']").on("click", countChecked);

    // disabled
    $("#disabledId input:disabled").val("this is it");

    // enabled
    $("#enabledId input:enabled").val("this is it");

    // :file
    var files = $("#fileId input:file").css({background: "yellow", border: "3px red solid"});
    $("#fileId div").text("For this type jQuery found " + files.length + ".").css("color", "red");
    $("#fileId form").submit(function () {
        return false;
    });

    // :image
    var images = $("#imageId input:image").css({background: "yellow", border: "3px red solid"});
    $("#imageId div").text("For this type jQuery found " + images.length + ".").css("color", "red");
    $("#imageId form").submit(function () {
        return false;
    });

    // :input
    var inputs = $("#inputId :input");
    var formChildren = $("#inputId form > *");
    $("#inputId div").text("Found " + inputs.length + " inputs and the form has " +
        formChildren.length + " children.").css("color", "red");
    $("#inputId form").submit(function () {
        return false;
    });

    // :password
    var passwords = $("#passwordId input:password").css({background: "yellow", border: "3px red solid"});
    $("#passwordId div").text("For this type jQuery found " + passwords.length + ".").css("color", "red");
    $("#passwordId form").submit(function () {
        return false;
    });

    // :radio
    var radios = $("#radioId input:radio").wrap("<span></span>").parent().css({
        background: "yellow",
        border: "3px red solid"
    });
    $("#radioId div").text("For this type jQuery found " + radios.length + ".").css("color", "red");
    $("#radioId form").submit(function () {
        return false;
    });

    // :reset
    var resets = $("#resetId input:reset").css({background: "yellow", border: "3px red solid"});
    $("#resetId div").text("For this type jQuery found " + resets.length + ".").css("color", "red");
    $("#resetId form").submit(function () {
        return false;
    });

    // :selected
    $("#selectedId select").change(function(){
        var str="";
        $("#selectedId option:selected").each(function(){
            str += $(this).text() + " ";
        });
        $("#selectedId div").text(str);
    }).trigger("change");

    // :submit
    var submits = $("#submitId td :submit").parent("td").css({background:"yellow", border:"3px red solid"}).end();
    $("#result").text('jQuery matched ' + submits.length + ' elements.');

    $("#exampleTable").find("td").each(function(i, el){     // el: td本身
        var inputEl = $(el).children(),                     // inputEl: td里的元素
            inputType = inputEl.attr('type') ? 'type="'+ inputEl.attr('type')+'"' : '';
        $(el).before('<td>' + inputEl[0].nodeName + inputType + '</td>');
    });

    // :text
    var texts = $("#textId input:text").css({background:"yellow", border:"3px red solid"});
    $("#textId div").text("For this type jQuery found " + texts.length + ".").css("color", "red");
    $("#textId form").submit(function () {
        return false;
    });


    // 层级
    // parent > child
    $("#parentChildId ul.topnav > li").css("border", "3px double red");

    // ancestor descendant
    $("#ancestorDescendantId form input").css("border", "2px dotted blue");

    // prev + next
    $("#prevNextId label + input").css("color", "blue").val("Labeled!");

    // prev ~ siblings
    $("#prevSiblingId #prev ~ div").css("border", "3px groove blue");

    // 可见性过滤
    // :hidden
    var hiddens = $("#hiddenId").find(":hidden").not("script");

    $("#hiddenId span:first").text("Found " + hiddens.length + " hidden elements total.");
    $("#hiddenId div:hidden").show(3000);
    $("#hiddenId span:last").text("Found " + $("#hiddenId input:hidden").length + " hidden inputs.");

    // :visible
    $("#visibleId div:visible").click(function(){
        $(this).css("background","yellow");
    });

    $("#visibleId button").click(function(){
        $("#visibleId div:hidden").show("fast");
    });

});

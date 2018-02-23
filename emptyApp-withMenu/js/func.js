//render left menu
function render_left_menu()
{
    $("div.left-menu").append("<ul id='left-menu-ul'></ul>");
    for(var i=0; i < SETTINGS.app.UI.left_menu.page_list.length; i++)
    {
        var page_obj = SETTINGS.app.UI.left_menu.page_list[i];
        var click_effect = (SETTINGS.app.UI.left_menu.text.click_effect !== "") ? " "+SETTINGS.app.UI.left_menu.text.click_effect : "";
        var dom = "<li class='left-menu-li"+click_effect+"' target='"+page_obj.load+"'>"+page_obj.name+"</li>";
        $("div.left-menu > ul#left-menu-ul").append(dom);
    }
    $("div.left-menu > ul#left-menu-ul > li.left-menu-li")
    .css({marginBottom : SETTINGS.app.UI.left_menu.text.margin_bottom})
    .on("click",function () {
        var target = $(this).attr("target");
        load_page(target,"#app-main");

        if(SETTINGS.app.UI.left_menu.auto_close)
            toggle_left_menu();
    });
}

//load page
// target    : url of page                 (string)
// dom       : where to write data as html (string)
// error_msg : msg to show when ajax fail  (string)
function load_page(target, dom, error_msg)
{
    if(typeof dom === "undefined")
    {
        if(SETTINGS.app.debug)
            console.log("[!]Please give a dom query as string!");
        return false;
    }
    if(typeof error_msg === "undefined")
        error_msg = "AJAX Error!";
    if(target !== "")
    {
        if(!SETTINGS.AJAX.lock1)
        {
            SETTINGS.AJAX.lock1 = true;
            $.ajax({
                url     : target,
                type    : "get",
                success : function (data){
                    $(dom).html(data);
                },
                error : function(){
                    alert(error_msg);
                }
            });
        }
        else
            alert(SETTINGS.AJAX.notification.ajax_lock);
    }
    else
    {
        if(SETTINGS.app.debug)
            console.log("[!]Target '"+target+"' not found!");
    }
}

/* HEADER - Back Button Show/Hide */
function toggle_back_button()
{
    $('#back-button').toggle();
}

/* Show/Hide Left Menu */
function toggle_left_menu()
{
    var dom_obj = $("div.left-menu");
    var status  = parseInt(dom_obj.attr("status"));

    if(status === 0)
    {
        dom_obj.stop().css({left : 0});
        setTimeout(function () {
            dom_obj.attr("status",1);
        },SETTINGS.app.UI.left_menu.anim_duration - 200);
    }
    else if(status === 1)
    {
        dom_obj.stop().css({left : "-"+dom_obj.css("width")});
        setTimeout(function () {
            dom_obj.attr("status",0);
        },SETTINGS.app.UI.left_menu.anim_duration - 200);
    }
}

function show_intermediate_screen(obj){
    if(typeof obj === "undefined" || typeof obj !== "object")
    {
        console.log("[!] - Please pass a object as argument.");
        return false;
    }
    if(typeof obj.background_color === "undefined" || typeof obj.background_color !== "string")
        obj.background_color = "rgba(0,0,0,0.75)";

    var img_dom;
    if(typeof obj.image === "undefined" || typeof obj.image !== "object")
    {
        obj.image = null;
        img_dom = "";
    }
    else
    {
        if(typeof obj.image.src === "undefined" || typeof obj.image.src !== "string")
            obj.image = null;
        else
        {
            if(typeof obj.image.width  === "undefined" || typeof obj.image.width !== "number")
                obj.image.width = 50;
            if(typeof obj.image.height === "undefined" || typeof obj.image.height !== "number")
                obj.image.height = 50;
            if(typeof obj.image.css === "undefined" || typeof obj.image.css !== "string")
                obj.image.css = "";

            img_dom = "<img src='"+obj.image.src+"' style='display: block; margin: 0 auto;width:"+obj.image.width+"px;height:"+obj.image.height+"px; margin-bottom:5px;'"+obj.image.css+">";
        }

    }
    if(typeof obj.text === "undefined")
        obj.text = "";

    var dom = ""+
    "<div id='intermediate-screen' style='width: 100%;height: 100%;position: absolute;left:0;top:0;z-index:100;background:"+obj.background_color+"; display: none; padding:10px;padding-top:75px;' status='1'>"+
    img_dom +
    "<span id='text' style='display: block;text-align: center;font-size:22px;'>"+obj.text+"</span>" +
    "</div>";

    if(!$("#intermediate-screen").length) //not exist
    {
        $("#app-main").append(dom);
        $("#intermediate-screen").fadeIn(300);
    }
    else
    {
        $("#intermediate-screen").remove();
        $("#app-main").append(dom);
        $("#intermediate-screen").fadeIn(300);
    }
}

function hide_intermediate_screen(){
    if(!$("#intermediate-screen").length) //not exist
        return false;
    else
    {
        if($("#intermediate-screen").attr("status") === "1")
        {
            $("#intermediate-screen").attr("status","0").fadeOut(300);
        }
    }
}

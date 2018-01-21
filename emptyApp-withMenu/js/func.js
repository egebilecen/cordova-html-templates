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
        dom_obj.stop().css({left : "-250px"});
        setTimeout(function () {
            dom_obj.attr("status",0);
        },SETTINGS.app.UI.left_menu.anim_duration - 200);
    }
}
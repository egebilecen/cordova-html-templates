//--[ Init HTML

//app background
$("body").css({
    backgroundColor : SETTINGS.app.UI.background_color,
    color : SETTINGS.app.UI.main_text_color
});

//header
$("div#header").css({
    backgroundColor : SETTINGS.app.UI.header.background_color,
    borderBottom     : "1px solid "+SETTINGS.app.UI.header.border_color
});

//header > left menu button
var _bar_margin = (SETTINGS.app.UI.header.left_menu_button.square_size - (SETTINGS.app.UI.header.left_menu_button.bar_height * 3)) / 3;
$("div#header > #open-left-menu").css({
    width  : SETTINGS.app.UI.header.left_menu_button.square_size + "px",
    height : (SETTINGS.app.UI.header.left_menu_button.square_size - _bar_margin) + "px",
    top : SETTINGS.app.UI.header.left_menu_button.position.top   + "px",
    left : SETTINGS.app.UI.header.left_menu_button.position.left + "px"
}).attr("class",$("div#header > #open-left-menu").attr("class") + " " + SETTINGS.app.UI.header.left_menu_button.click_effect)
.on("click",toggle_left_menu);
$("div#header > #open-left-menu > .bar").css({
    height       : SETTINGS.app.UI.header.left_menu_button.bar_height    + "px",
    borderRadius : SETTINGS.app.UI.header.left_menu_button.border_radius + "px",
    backgroundColor : SETTINGS.app.UI.header.left_menu_button.bar_color,
    marginBottom    : _bar_margin + "px"
});

// app name
$('div#header > span#title').css('color',SETTINGS.app.UI.app_name_color).html(SETTINGS.app.name);

//back button
$("span#back-button").html(SETTINGS.app.back_button_text).attr("class", $("span#back-button").attr("class") + " " + SETTINGS.app.UI.back_button.click_effect);

//left menu
$("div.left-menu").css({
    width : window.innerWidth * 60 / 100,
    transition      : "left "+String(SETTINGS.app.UI.left_menu.anim_duration)+"ms",
    backgroundColor : SETTINGS.app.UI.left_menu.background_color,
    paddingLeft     : SETTINGS.app.UI.left_menu.padding.left   + "px",
    paddingRight    : SETTINGS.app.UI.left_menu.padding.right  + "px",
    paddingTop      : SETTINGS.app.UI.left_menu.padding.top    + "px", //50 is header's height (Not changable)
    paddingBottom   : SETTINGS.app.UI.left_menu.padding.bottom + "px",
    top        : $("div#header").css("height"),
    left       : "-"+String(window.innerWidth * 60 / 100)+"px",
    color      : SETTINGS.app.UI.left_menu.text.color,
    fontSize   : SETTINGS.app.UI.left_menu.text.size + "px",
    fontWeight : SETTINGS.app.UI.left_menu.text.weight,
    textAlign  : SETTINGS.app.UI.left_menu.text.align
});
if(SETTINGS.app.UI.left_menu.text.font !== "")
    $("div.left-menu").css({fontFamily : SETTINGS.app.UI.left_menu.text.font});

//render left menu
render_left_menu();

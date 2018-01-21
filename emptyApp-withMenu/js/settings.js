/*
* Avaible Effects:
* anim-scale-up
* anim-scale-down
* */
var SETTINGS = {
    app : {
        name    : 'Empty App',
        version : '1.0.0',
        creator : 'YourTeam',
        back_button_text : "< Geri",
        debug : 1,
        UI : {
            back_button : {
              click_effect : "anim-scale-up"
            },
            main_text_color  : "white",
            app_name_color   : "crimson",
            background_color : "#212121",
            header : {
                background_color : "#2d2d2d",
                border_color : "#444444",
                left_menu_button  : {
                    //based on px
                    square_size : 30,
                    bar_height  : 5,
                    bar_color : "#ccc",
                    border_radius : 6,
                    position : {
                        //based on px
                        top : 13,
                        left: 10
                    },
                    click_effect : "anim-scale-down"
                }
            },
            left_menu : {
                auto_close : true, //when clicked to a page name, auto close if true
                text : {
                    color  : "#000",
                    size   : 24, //px
                    weight : "bold", //normal,bold
                    align  : "start", //center,start
                    click_effect : "anim-scale-down",
                    font : "", //default if empty
                    margin_bottom : 10 //px
                },
                page_list : [
                    {
                        name : "Homepage",
                        load : ""
                    }
                ],
                width : 60, //based on %
                background_color : "#eee",
                padding : {
                    //based on px
                    left  : 10,
                    right : 10,
                    top   : 15,
                    bottom: 15
                },
                anim_duration : 1000 //ms
            }
        }
    },
    API : {
        url : 'http://site.com/api.php'
    },
    AJAX : {
        notification : {
            ajax_lock : "Wait until end of last process."
        },
        lock1 : false
    }
};
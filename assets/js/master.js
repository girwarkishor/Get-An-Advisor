/*function fnMastHeadFunctions() {

    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    sideslider.click(function (event) {
        fnShowOverlay(true);
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });


    function fnShowOverlay(isEnabled) {
        var width = $(window).width();
        var IsTab = (width >= 601 && width <= 800);
        var AllSmallDevices = (width <= 800);
        //$(".menu-icon").toggleClass("open");
        if (isEnabled ) {
            if ($(".bodywrapper").hasClass("over_scroll")) {
                $(".bodywrapper").removeClass("over_scroll");
            } else {
                $(".bodywrapper").addClass("over_scroll");
            }
            //$(".cust-log-ico").toggleClass("no-display");
            if (IsTab) {
                // $('.logo').toggleClass("no-display");
                $('.overlay').toggleClass("display_blk");
                setTimeout(function () {
                    $(".overlay").toggleClass("over_fade");
                }, 1);
                IsOverlayDisplay = $('.overlay').hasClass("display_blk");
            }

            

        }

        if (!AllSmallDevices) {
            $(".bodywrapper").removeClass("over_scroll");
            $('.overlay').removeClass("display_blk");
            $('.logo').removeClass("no-display");
        }


        setTimeout(function () {
             width = $(window).width();
             IsTab = (width >= 601 && width <= 800);
             AllSmallDevices = (width <= 800);

             var isData = !($(".side-collapse").hasClass("in"));

             if (IsTab && !isEnabled) {
                 if (isData) {
                     $('.logo').addClass("no-display");
                     $('.overlay').addClass("display_blk");
                     $(".bodywrapper").addClass("over_scroll");
                 }
             }

        }, 100)
        

        if (!isEnabled && $("#bs-example-navbar-collapse").hasClass("in")) {
            $(".icon-icon-close").click();
        }
       

    }
    //menu mobile open close

    $(".menu-icon").click(function () {
        var width = $(window).width();
        $(".menu-icon").toggleClass("open");
        $(".navbar-left .cust-log-ico-mob").toggleClass("no-display");
        //$("body").toggleClass("over_scroll");
        $(".cust-log-ico").toggleClass("no-display");
        if (width >= 601 && width <= 800) {
            $('.logo').toggleClass("no-display");
            //    $('.overlay').toggleClass("display_blk");
        }
        
    });



    $(".mob_nav a").click(function () {
        $("#bs-example-navbar-collapse").toggleClass("in");
        $(".subnav-custom").toggleClass("click_mob");

       
        $(".lob_collapse").addClass("no-display");
        $(".lob_expand").toggleClass("block-display");
        $(".click_mob .custom-navbar-subnav").addClass("ht_100");
        SetFixedPosition(this, "nav");
        fnShowOverlay(true);

        setTimeout(function(){

             $(".subnav-custom").toggleClass("over_fade");
        },20);
    });

    $(".icon-icon-close").click(function () {

        $("#bs-example-navbar-collapse").removeClass("in");
        $(".subnav-custom").removeClass("click_mob");
        $(".subnav-custom").removeClass("over_fade");
        $(".lob_expand").removeClass("block-display");
        $(".lob_collapse").removeClass("no-display");
        $(".subnav-custom .navbar-default").removeClass("ht_100");
        SetFixedPosition(this, "nav");
        // var dt = parseInt($('.overlay').css("z-index"));
        // if (dt != 50) {
        //     $('.overlay').css("z-index", "50")
        // } else {
        //     $('.overlay').css("z-index", "80")
        // }
        fnShowOverlay(true);
    });


    $(".nav-item .abc_mb_2nd").click(function () {
        var parentNav = $(this).closest("nav");

        if (parentNav.length <= 0) {
            return;
        }
        var width = $(window).width();
        if (width >= 320 && width <= 800) {

            if ($(parentNav).hasClass("ht_100")) {
                $(parentNav).removeClass("ht_100");
            } else {
                $(parentNav).addClass("ht_100");
            }

            if (parentNav.height() <= $(window).height()) {
                $(parentNav).addClass("ht_100");
            }
        }
    });

    function SetFixedPosition(obj, destion) {
        var parentNav = $(obj).closest(destion);

        if (parentNav.length <= 0) {
            return;
        }

        if ($(parentNav).hasClass("menu_fix_top")) {
            $(parentNav).removeClass("menu_fix_top");
        } else {
            $(parentNav).addClass("menu_fix_top");
        }

        if ($(parentNav).hasClass("submenu_fix")) {
            $(parentNav).removeClass("submenu_fix");
        } else {
            $(parentNav).addClass("submenu_fix");
        }
    }

    function fnSetMastLayout(){

        var width = $(window).width();

            if(width >= 801){
                $('.mast_head').removeClass('container-fluid').addClass('container');
            }
           

            else if(width >= 320 && width <= 800){
                $('.mast_head').removeClass('container').addClass('container-fluid');
            }
    }

    fnSetMastLayout();

    $(window).resize(function () {
        fnShowOverlay(false);
        fnSetMastLayout();
    });
 
 $(".overlay").click(function () {
       fnCloseOpenMenus();
   });

   $(window).on("orientationchange", function () {
       fnCloseOpenMenus();
   });

   function fnCloseOpenMenus() {

       var width = $(window).width();
       var AllSmallDevices = (width <= 800);

       if (AllSmallDevices) {
           var isMenuOpen = !($(".side-collapse").hasClass("in"));
           if (isMenuOpen) {
               sideslider.click();
           }

           isMenuOpen = $("#bs-example-navbar-collapse").hasClass("in");
           if (isMenuOpen) {
               $(".icon-icon-close").click();
           }
       }

       $(".bodywrapper").removeClass("over_scroll");
       $('.overlay').removeClass("display_blk");
       $('.logo').removeClass("no-display");
   }
}

function dashBoard(){

    $(window).resize(function(){
           var  content = $(".dashboard").find(".accordion");
            var width = $(window).width();

             if(width >= 320 && width <= 600){
          
              $(".panel-collapse").removeClass("in"); 
          $(".accordion-toggle").addClass("collapsed");
           
            }
            else if(width >= 601){
          
              $(".panel-collapse").addClass("in"); 
           
            }



            })

.resize();




}

$(document).ready(function() {

fnMastHeadFunctions();
dashBoard();
   
});


*/
$(document).ready(function(){
    var phone_number_form_index=0;
    var rowNum = 0;
    // $(".add_member").on("click","[id^='button_']", function(){
    //     console.log('hi');
    //     var index = $(this).attr('id').split("_")[1];
    //     $("#button_"+index).before($(".addmember").clone());
    // })
    // $(".add_member").click(function(){
    //     $(this).before($(".addmember").clone());
    // });
    $("#add_phone_number").click(function(){
        phone_number_form_index++;
        $(this).parent().before($("#phone_number_form").clone().attr("id","phone_number_form" + phone_number_form_index));
        $("#phone_number_form" + phone_number_form_index).css("display","inline");
        $("#phone_number_form" + phone_number_form_index + " :input").each(function(){
            $(this).attr("name",$(this).attr("name") + phone_number_form_index);
            $(this).attr("id",$(this).attr("id") + phone_number_form_index);
            });
        $("#remove_phone_number" + phone_number_form_index).click(function(){
            $(this).closest("div").remove();
        });
    }); 
});
function fnMastHeadFunctions() {

    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    sideslider.click(function (event) {
        fnShowOverlay(true);
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });


    function fnShowOverlay(isEnabled) {
        var width = $(window).width();
        var IsTab = (width >= 400 && width <= 800);
        var AllSmallDevices = (width <= 800);
        //$(".menu-icon").toggleClass("open");
        if (isEnabled ) {
            if ($(".bodywrapper").hasClass("over_scroll")) {
                $(".bodywrapper").removeClass("over_scroll");
            } else {
                $(".bodywrapper").addClass("over_scroll");
            }
            //$(".cust-log-ico").toggleClass("no-display");
            if (IsTab) {
                // $('.logo').toggleClass("no-display");
                $('.overlay').toggleClass("display_blk");
                setTimeout(function () {
                    $(".overlay").toggleClass("over_fade");
                }, 1);
                IsOverlayDisplay = $('.overlay').hasClass("display_blk");
            }
            

        }

        if (!AllSmallDevices) {
            $(".bodywrapper").removeClass("over_scroll");
            $('.overlay').removeClass("display_blk");
            $('.logo').removeClass("no-display");
        }


        setTimeout(function () {
             width = $(window).width();
             IsTab = (width >= 601 && width <= 800);
             AllSmallDevices = (width <= 800);

             var isData = !($(".side-collapse").hasClass("in"));

             if (IsTab && !isEnabled) {
                 if (isData) {
                     $('.logo').addClass("no-display");
                     $('.overlay').addClass("display_blk");
                     $(".bodywrapper").addClass("over_scroll");
                 }
             }

        }, 100)
        

        if (!isEnabled && $("#bs-example-navbar-collapse").hasClass("in")) {
            $(".icon-icon-close").click();
        }
       

    }
    //menu mobile open close

    $(".menu-icon").click(function () {
        var width = $(window).width();
        $(".menu-icon").toggleClass("open");
        $(".navbar-left .cust-log-ico-mob").toggleClass("no-display");
        $(".divicon ").toggleClass("no-display");

        //$("body").toggleClass("over_scroll");
        $(".cust-log-ico").toggleClass("no-display");
        if (width >= 601 && width <= 800) {
            $('.logo').toggleClass("no-display");
            //    $('.overlay').toggleClass("display_blk");
        }
        
    });



    $(".mob_nav a").click(function () {
        $("#bs-example-navbar-collapse").toggleClass("in");
        $(".subnav-custom").toggleClass("click_mob");

       
        $(".lob_collapse").addClass("no-display");
        $(".lob_expand").toggleClass("block-display");
        $(".click_mob .custom-navbar-subnav").addClass("ht_100");
        SetFixedPosition(this, "nav");
        fnShowOverlay(true);

        setTimeout(function(){

             $(".subnav-custom").toggleClass("over_fade");
        },20);
    });

    $(".icon-icon-close").click(function () {

        $("#bs-example-navbar-collapse").removeClass("in");
        $(".subnav-custom").removeClass("click_mob");
        $(".subnav-custom").removeClass("over_fade");
        $(".lob_expand").removeClass("block-display");
        $(".lob_collapse").removeClass("no-display");
        $(".subnav-custom .navbar-default").removeClass("ht_100");
        SetFixedPosition(this, "nav");
        // var dt = parseInt($('.overlay').css("z-index"));
        // if (dt != 50) {
        //     $('.overlay').css("z-index", "50")
        // } else {
        //     $('.overlay').css("z-index", "80")
        // }
        fnShowOverlay(true);
    });


    $(".nav-item .abc_mb_2nd").click(function () {
        var parentNav = $(this).closest("nav");

        if (parentNav.length <= 0) {
            return;
        }
        var width = $(window).width();
        if (width >= 320 && width <= 800) {

            if ($(parentNav).hasClass("ht_100")) {
                $(parentNav).removeClass("ht_100");
            } else {
                $(parentNav).addClass("ht_100");
            }

            if (parentNav.height() <= $(window).height()) {
                $(parentNav).addClass("ht_100");
            }
        }
    });

    function SetFixedPosition(obj, destion) {
        var parentNav = $(obj).closest(destion);

        if (parentNav.length <= 0) {
            return;
        }

        if ($(parentNav).hasClass("menu_fix_top")) {
            $(parentNav).removeClass("menu_fix_top");
        } else {
            $(parentNav).addClass("menu_fix_top");
        }

        if ($(parentNav).hasClass("submenu_fix")) {
            $(parentNav).removeClass("submenu_fix");
        } else {
            $(parentNav).addClass("submenu_fix");
        }
    }

    function fnSetMastLayout(){

                                
        var width = $(window).width();

            if(width >= 801){
                $('.mast_head').removeClass('container-fluid').addClass('container');
            }
           

            else if(width >= 320 && width <= 800){
                $('.mast_head').removeClass('container').addClass('container-fluid');
            }
    }

    fnSetMastLayout();

    $(window).resize(function () {
        fnShowOverlay(false);
        fnSetMastLayout();
    });

    
    $(".overlay").click(function () {
        fnCloseOpenMenus();
    });

    $(window).on("orientationchange", function () {
        fnCloseOpenMenus();
    });

    function fnCloseOpenMenus() {
                                                                  
                            
                                  
            

        var width = $(window).width();
        var AllSmallDevices = (width <= 800);
                                             
            

        if (AllSmallDevices) {
            var isMenuOpen = !($(".side-collapse").hasClass("in"));
            if (isMenuOpen) {
                sideslider.click();
            }

            isMenuOpen = $("#bs-example-navbar-collapse").hasClass("in");
            if (isMenuOpen) {
                $(".icon-icon-close").click();
            }
        }

        $(".bodywrapper").removeClass("over_scroll");
        $('.overlay').removeClass("display_blk");
        $('.logo').removeClass("no-display");
    }
}                                
                           
       

     
$(document).ready(function() {

fnMastHeadFunctions();
 $(window).resize(function(){
           var  content = $(".dashboard").find(".accordion");
            var width = $(window).width();

             if(width >= 320 && width <= 600){
          
              $(".panel-collapse").removeClass("in"); 
          $(".accordion-toggle").addClass("collapsed");
           
            }
            else if(width >= 601){
          
              $(".panel-collapse").addClass("in"); 
           
            }



            })

.resize();


$( ".dropbtn" ).click(function(e) {
    $(".dash_drp_sub").toggleClass("show");
     e.stopPropagation(); // This is the preferred method.
    return false;        // This should not be used unless you do not want
                         // any click events registering inside the div
  
});

$(document).click(function() {
    $(".dash_drp_sub").removeClass("show");
    
});

$('.dash_drp_sub li:last').prev().addClass('divider');
$('.dash_drp_sub li:last').addClass('last_chld');

//active link on hover

/*$(".navbar-center .center-list li a").hover(function(){
    $(this).addClass("active");
    
});
*/
/*$(".navbar-center  li a").mouseover(function(){
    var width= $(window).width();
    if(width>=801){

    if( !$(this).hasClass('active'))
    {
        $(this).addClass("hover_active");
       // alert("hi");

    }
    }
   
  })

  $(".navbar-center  li a").mouseout(function(){
   $(this).removeClass("hover_active");
  })
  */

$( ".btn-contact a" ).addClass("no_wrap");


});







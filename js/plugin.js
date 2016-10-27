$(document).ready(function(){
    // Navbar Animation
    $(".navbar").show();
    $(function(){
        $(window).scroll(function(){
            if( $(this).scrollTop() >= 500) {
                $(".navbar-default").fadeOut("fast");
            } else {
                $(".navbar-default").fadeIn("slow slow");
            }
        });
    });
    // Carousel Speed
    $(".carousel").carousel({
        interval:3000,
        pause:false
    });
    //NiceScroll Plugin activation
    $("html").niceScroll({cursorcolor:"#16a085"});
    //wowJs Activation
    new WOW().init();
    // Loading Screen
    $(window).load(function(){
    $(".overlay .loader").fadeOut(100,function(){
      $(this).parent().fadeOut(100,function(){
        $("body").css("overflow","auto");
        $(this).remove();
      });
    });
  });
});

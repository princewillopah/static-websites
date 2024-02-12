$(document).ready(function(){

     // -----------menu animated border-bottom ------------------- 
    $(".navbar-nav li a").addClass('navbar-border-animation');

    // -----------end menu animated border-bottom ------------------- 

    // -----------scrol top button -------------------

    $(window).scroll(function () {
        if($(this).scrollTop() < 100 ){
            $("#back-to-top").fadeOut(1000);
            // $(".navbar").css({'padding':'0'});
        }else{
            $("#back-to-top").fadeIn(1000);
            // $(".navbar").css({'padding':'0.5rem 1rem'});
        }
    });
    $("#back-to-top").click(function() {
        $('html ,body').animate({scrollTop: 0}, 1500);
    });
   // -----------end scrol top button -------------------

   // -----------sticky nav -------------------

   $(window).scroll(function () {
    if($(this).scrollTop() > 250 ){

        $("#navbar nav").fadeIn(1000).addClass('fixed-top').addClass('sticky');
        $("#navbar .navbar .navbar-brand img").addClass('my-logo');
    }else{
        $("#navbar nav").removeClass('fixed-top').removeClass('sticky');
        $("#navbar .navbar .navbar-brand img").removeClass('my-logo');
    }
});
 // -----------end sticky nav -------------------




});//end document.ready
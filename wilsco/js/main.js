// ==============================================================
//             owl carousel code
// ==============================================================
// $('.single-slider').owlCarousel({
//     // animateOut: 'fadeOut',
// // responsive:{
//     //   0:{
//     //     items:1
//     //   },
//     //   600:{
//     //     items:1
//     //   },
//     //   1000:{
//     //     items:1
//     //   }
//     // },
//     loop:true,
//     items:1,//for one image
//     margin:0,
//     nav:false,
//     autoplay:true,
//     onInitialized: startProgressBar,//calling progressbar
//     onTranslate: resetProgressBar,//calling progressbar
//     onTranslated:  startProgressBar,//calling progressbar
// });
// // for custom next prev
// let owl = $('.myOwlCarouselNav');
// owl.owlCarousel();
// // Go to the next item
// $('.customNextBtn').click(function() {
//     owl.trigger('next.owl.carousel');
// });
// // Go to the previous item
// $('.customPrevBtn').click(function() {
//     owl.trigger('prev.owl.carousel', [300]);
// });

// // for ProgressBar
// function startProgressBar() {
//     $(".slide-progress").css({width:'100%',transition:'width 5000ms'});
// }

// function resetProgressBar() {
//     $(".slide-progress").css({width:0,transition:'width 0s'});
// }


// =========================================================================
// bootstrap progress bar
// ==========================================================================

// $(document).ready(function(){
//     var percent = 0;
//     bar = $('.transition-timer-carousel-progress-bar');
//     crsl = $('#myCarouselIndicators');
//     function progressBarCarousel(){
//         bar.css({width:percent+'%'});
//         percent = percent + 0.5;
//         if( percent>100){
//             percent = 0;
//             crsl.carousel('next');

//         }
//     }
//     crsl.carousel({interval:false, pause:true}).on('slid.bs.carousel',function () {});
//     var barInterval = setInterval(progressBarCarousel,30);
//     crsl.hover(
//         function(){
//             clearInterval(barInterval);
//         },
//         function(){
//             barInterval = setInterval(progressBarCarousel,30);
//         }
//     );
// });


// =========================================================================
// multiple
// ==========================================================================
$('.multiple-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
        items:1
        },
        600:{
        items:2
        },
        1000:{
        items:4
        }
    },
});

// for custom next prev
let owls = $('.myMultipleSliderNav');
owls.owlCarousel();
// Go to the next item
$('.myMultipleSliderNavcustomNextBtn').click(function() {
    owls.trigger('next.owl.carousel');
});
// Go to the previous item
$('.myMultipleSliderNavcustomPrevBtn').click(function() {
    owls.trigger('prev.owl.carousel', [300]);
});
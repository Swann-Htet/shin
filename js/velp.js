window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 171.19 || document.documentElement.scrollTop > 171.19) {
        $("#navbar").addClass("fixed-top");
        $(".content").addClass("m-41");
  } else {
        $("#navbar").removeClass("fixed-top");
        $(".content").removeClass("m-41");
  }
}

// Home Slider
// $(document).ready(function(){
//       $(".owl-carousel").owlCarousel();
// });
$('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      loop:true,
      nav:true,
        navText : ["<i class='fa fa-chevron-circle-left me-2 ow-l'></i>","<i class='fa fa-chevron-circle-right ms-2 ow-r'></i>"],
      dots: false,
      autoplay:true,
      autoplayTimeout: 1500,
      autoplayHoverPause:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:2
          },
          1000:{
              items:3,
              nav:true,
          }
      }
  })
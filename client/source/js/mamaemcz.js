$(document).ready(function() {
 
   $("#owl-demo").owlCarousel({
 
      items: 4,
      loop: true,
      autoplay:true,
      autoplayTimeout:4000,
      dots: false
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,https://www.cursosiag.com.br/lms/common/site/imgs/banners/banner_academia.jpg
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

window.sr = ScrollReveal();
sr.reveal('.foo', { duration: 1000 }, 50);

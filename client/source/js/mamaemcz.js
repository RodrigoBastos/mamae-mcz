$(document).ready(function() {
  //ToDo - Comentar código
  $("#owl-demo").owlCarousel({
    items: 4,
    loop: true,
    autoplay:true,
    autoplayTimeout:4000,
    dots: true
  });

  //ToDo - Comentar código
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//ToDo - Comentar código
window.sr = ScrollReveal();
sr.reveal(".foo", { duration: 1000 }, 50);

/**
 * Envia email com o contato do novo membro
 * @returns {boolean}
 */
function sendContact () {

  $.ajax({
    type: "POST",
    url: "/contact",
    data: $("#formAssociacao").serialize(),
    success: function (data) { alert(data); }
  });

  return false;
}

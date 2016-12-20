$(document).ready(function() {
 
   $("#owl-demo").owlCarousel({
 
      items: 4,
      loop: true,
      autoplay:true,
      autoplayTimeout:4000,
      dots: true
  });
 
});

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
    success: success
  });

  function success (data) {
    alert(data);
  }

  return false;
}

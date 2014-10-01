var Effect = {

  dare: $('#dare'),
  dareEvent: function(){
    Effect.dare.click(function(){
      $(this).fadeOut();
      $('#welcomeDiv').fadeIn();
    });
  },
  buttonsClick:function(){
    $('.select').click(function(){
      $('.select').removeClass("selected")
      $(this).addClass("selected")
    });
  }
};
$(document).ready(function(){
  Effect.dareEvent();
  Effect.buttonsClick();
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1300);
        return false;
      }
    }
  });
});
});
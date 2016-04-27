$( document ).ready(function() {
   
  var docHeight = $(document).height(); 
  //change glow with distance
  //calculate distance
  var mX, mY, distance,$element  = $('#orb');

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
  }

  //mousemove
  $(document).mousemove(function(e) {
    distance = calculateDistance($element, e.pageX, e.pageY);
    var glowAmount = ( 1-(distance/500) );

    $("#orb").css({
      'box-shadow' : "0 0 60px 30px rgba(255, 255, 255,"+glowAmount+"), 0 0 140px 90px rgba(66, 220, 163,"+glowAmount+")"
      ,'background-color' : "rgba(255, 255, 255,"+glowAmount+")"
    });    
  });// end mousemove


  $(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    
    //light up headers when active
    if( $('a[href="#about"]').parents("li").hasClass("active") )
      $('#about-header').addClass('active');
    else
      $('#about-header').removeClass('active');
    if( $('a[href="#code"]').parents("li").hasClass("active") )
      $('#code-header').addClass('active');
    else
      $('#code-header').removeClass('active');
    if( $('a[href="#music"]').parents("li").hasClass("active") )
      $('#music-header').addClass('active');
    else
      $('#music-header').removeClass('active');
    if( $('a[href="#contact"]').parents("li").hasClass("active") )
      $('#contact-header').addClass('active');
    else
      $('#contact-header').removeClass('active');

  }); //end scroll

});
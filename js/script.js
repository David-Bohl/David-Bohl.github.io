
// Number.prototype.map = function (in_min, in_max, out_min, out_max) {
//   return parseInt((this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
// }

$( document ).ready(function() {
   
  var docHeight = $(document).height(); 

  // $('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
  //   var activeSection = $(this).find("li.active a").attr("href");
  //   $(activeSection).find('h2').addClass('active');
  // });



  
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

    // for orb
    $("#orb").css({
      'box-shadow' : "0 0 60px 30px rgba(255, 255, 255,"+glowAmount+"), 0 0 100px 60px rgba(255, 0, 255,"+glowAmount+"),0 0 140px 90px rgba(0, 255, 255,"+glowAmount+")"
      ,'background-color' : "rgba(255, 255, 255,"+glowAmount*1.5+")"
    });    

    // for marble
    // $("#marble").css({
    //   'box-shadow' : "0 0 60px 30px rgba(255, 255, 255,"+glowAmount+"), 0 0 100px 60px rgba(255, 0, 255,"+glowAmount+"),0 0 140px 90px rgba(0, 255, 255,"+glowAmount+")"
    //   ,'background-color' : "rgba(255, 255, 255,"+glowAmount*1.5+")"
    // }); 

  });// end mousemove




  





  // mouse position
  //$( document ).on( "mousemove", function( event ) {
    //console.log("x:" + event.pageX + "y:" + event.pageY);

  //});




  $(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    
    //sunset
    // var sunHeight = parseInt(300+scroll);
    // console.log(sunHeight);
    // $('#sun').css({top:sunHeight});

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


    //change background color on scroll--------------------

    //mapping code
    //$("header.intro,section#about,section#code,section#music,section#contact").css('background', 'rgb('+scroll.map(0,docHeight, 50,255 )+','+scroll.map(0,docHeight, 76,255 )+','+scroll.map(0,docHeight, 22,255 )+')');

    //quick fade blue to black
    //$("header.intro,section#about,section#code,section#music,section#contact").css('background', 'rgb('+ parseInt((1270-scroll*2)/10)+','+parseInt((1270-scroll*2)/10)+','+parseInt((2550-scroll*4)/10)+')');

    //original colors
      //$("header.intro,section#about,section#code,section#music,section#contact").css('background', 'rgb('+ parseInt(scroll/10)+','+parseInt(scroll/10)+','+parseInt(scroll/5)+')');


  }); //end scroll

});
function showLanding() {
  var landing = $('.landing');
  var endHeight = landing.height();

  landing.css({
    height: 0,
    opacity: 1
  });

  landing.animate({
    height: endHeight+'px'
  }, 1500, 'easeOutQuart');

  var delay = 200;
  $('.landing pre span').each(function() {
    $(this).delay(delay).animate({
      opacity: 1
    }, 0);
    delay += 80;
  });
  
}
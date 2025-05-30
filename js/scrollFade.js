//$(window).on('load', function() {
   // $('.c-pattern').addClass('show');
//});

$(window).on('scroll', function() {
  var scroll = $(window).scrollTop();
  var fadeStart = 0;      // フェード開始位置
  var fadeUntil = 1000;    // 完全に消える位置
  var opacity = 1;

  if (scroll <= fadeStart) {
    opacity = 1;
  } else if (scroll <= fadeUntil) {
    opacity = 1 - (scroll - fadeStart) / (fadeUntil - fadeStart);
  } else {
    opacity = 0;
  }

  $('.l-topView').css('opacity', opacity);
});
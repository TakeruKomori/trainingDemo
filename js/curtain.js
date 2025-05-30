function checkAnimeTrigger() {
    $(".c-anime_wrap").each(function () {
      var offset  = $(this).offset().top;
      var scroll  = $(window).scrollTop();
      var wHeight = $(window).height();
  
      if (scroll > offset - wHeight + wHeight / 2) {
        $(this).addClass("show");
      }
    });
  }
  
  // スクロール時に実行
  $(window).scroll(function () {
    checkAnimeTrigger();
  });
  
  // ページ読み込み時にも実行
  $(window).on('load', function () {
    checkAnimeTrigger();
  });
  
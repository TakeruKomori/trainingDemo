function checkAnimeTrigger() {
    $(".js-ctWrap").each(function () {
      var offset  = $(this).offset().top;
      var scroll  = $(window).scrollTop();
      var wHeight = $(window).height();
  
      if (scroll > offset - wHeight + wHeight / 2) {
        $(this).addClass("is-show");
      }
    });
  }
  
  // スクロール時に実行
  //$(window).scroll(function () {
    $(window).on("scroll", function () {
    checkAnimeTrigger();
  });
  
  // ページ読み込み時にも実行
  $(window).on('load', function () {
    checkAnimeTrigger();
  });
  
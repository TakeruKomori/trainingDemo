//curtain.js
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
  
  //lenis.js

const lenis = new Lenis({
    duration: 2.2,
    easing: (t) => Math.min(1, 1.01 - Math.pow(2, -6 * t)),
  // スムースな加速・減速
    smooth: true,
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  
  lenis.on("scroll", () => {
    const elements = document.querySelectorAll('.js-parallax');
    const windowHeight = window.innerHeight;
  
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight && rect.bottom > 0) {
        const ratio = rect.top / windowHeight;
        const offset = ratio * 30;
        el.style.transform = `translateY(${offset}px)`;
      }
    });
  
  });
  //scrollFade.js

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
  
    $('.js-scrlFade').css('opacity', opacity);
  });
  
  
  
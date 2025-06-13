//curtain.js
function checkAnimeTrigger() {
  if ($(".js-ctWrap").length > 0) {//.js-ctWrapがなければ発火させない
    $(".js-ctWrap").each(function () {
      let offset  = $(this).offset().top;//varとletの違い🔍
      let scroll  = $(window).scrollTop();
      let wHeight = $(window).height();
  
      if (scroll > offset - wHeight + wHeight / 2) {
        $(this).addClass("is-show");
      }
    });}
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
    let scroll = $(window).scrollTop();
    let fadeStart = 0;      // フェード開始位置
    let fadeUntil = 1000;    // 完全に消える位置
    let opacity = 1;
  
    if (scroll <= fadeStart) {
      opacity = 1;
    } else if (scroll <= fadeUntil) {
      opacity = 1 - (scroll - fadeStart) / (fadeUntil - fadeStart);
    } else {
      opacity = 0;
    }
  
    $('.js-scrlFade').css('opacity', opacity);
  });
  
// 不透明度スクロール制御
$(window).on('scroll', function () {
  let scroll = $(window).scrollTop();
  let fadeStart = 0;
  let fadeUntil = 1000;
  let opacity = 1;

  if (scroll <= fadeStart) {
    opacity = 1;
  } else if (scroll <= fadeUntil) {
    opacity = 1 - (scroll - fadeStart) / (fadeUntil - fadeStart);
  } else {
    opacity = 0;
  }

  $('.js-scrlFade').css('opacity', opacity);
});

// タイトルアニメーション処理
document.querySelectorAll('.c-ttl-anm').forEach((about) => {
  const ttl = about.querySelector('.c-ttl');
  const spans = ttl.querySelectorAll('span');

  spans.forEach((span, index) => {
    span.style.transitionDelay = `${0.1 + index * 0.04}s`;
  });

  const onScroll = () => {
    const rect = about.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.5) {
      about.classList.add('is-active');
      window.removeEventListener('scroll', onScroll);
    }
  };
  window.addEventListener('scroll', onScroll);
});

  
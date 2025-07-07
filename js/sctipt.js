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

//const lenis = new Lenis({
//    duration: 2.2,
//    easing: (t) => Math.min(1, 1.01 - Math.pow(2, -6 * t)),
  // スムースな加速・減速
 //   smooth: true,
 // });
  
 // function raf(time) {
  //  lenis.raf(time);
 //   requestAnimationFrame(raf);
 // }
  
 // requestAnimationFrame(raf);
  
  //lenis.on("scroll", () => {
  //  const elements = document.querySelectorAll('.js-parallax');
  //  const windowHeight = window.innerHeight;
  
  //  elements.forEach(el => {
  //    const rect = el.getBoundingClientRect();
  //    if (rect.top < windowHeight && rect.bottom > 0) {
  //      const ratio = rect.top / windowHeight;
  //      const offset = ratio * 30;
  //      el.style.transform = `translateY(${offset}px)`;
  //    }
  //  });
  
 // });
  //scrollFade.js

// Lenis
const lenis = new Lenis({
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ScrollTrigger に同期させる
lenis.on('scroll', ScrollTrigger.update);
  
// 不透明度スクロール制御
$(window).on('scroll', function () {
  let scroll = $(window).scrollTop();
  let fadeStart = 0;
  let fadeUntil = 1000;
  let opacity = 1;

  const minOpacity = 0.2;

  if (scroll <= fadeStart) {
    opacity = 1;
  } else if (scroll <= fadeUntil) {
    // 1 から 0 へ徐々に下がるが、minOpacity を下限に設定
    const rawOpacity = 1 - (scroll - fadeStart) / (fadeUntil - fadeStart);
    opacity = Math.max(minOpacity, rawOpacity);
  } else {
    opacity = minOpacity;
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

  // ScrollTriggerを使う準備
gsap.registerPlugin(ScrollTrigger);

// 各セクションをスクロールに合わせて固定表示させる
gsap.utils.toArray(".panel").forEach((panel) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top 20%",
    end: () => "+=" + window.innerHeight, 
    pin: true,
    pinSpacing: true, // セクション間の空白を作らない
    scrub: false, // スクロール連動アニメ
    markers:true,
  });
});

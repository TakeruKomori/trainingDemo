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
  duration: 5.5,//重さ
  easing: (t) => Math.min(1, 1.01 - Math.pow(2, -6 * t)),
  smooth: false,
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

 // GSAP ScrollTrigger登録
gsap.registerPlugin(ScrollTrigger);

// anime.js で SVGをループアニメさせるクラス
class LoopingSVG {
	constructor(el) {
		this.el = el;
		this.path = el.querySelector(".item__clippath");
		this.paths = {
			start: this.path.getAttribute("d"),
			end: el.dataset.morphPath
		};
		this.animatePath();
	}

	animatePath() {
		anime({
			targets: this.path,
			d: [
				{ value: this.paths.end },
				{ value: this.paths.start }
			],
			duration: 8000,
			easing: "easeInOutQuad",
			loop: true,
			direction: "alternate"
		});
	}
}

// DOM準備が整ったらすべて初期化
document.addEventListener("DOMContentLoaded", () => {
	// SVGループアニメ開始
	document.querySelectorAll(".item").forEach(item => new LoopingSVG(item));

	// 各セクションを固定表示（縦スクロール中）
	gsap.utils.toArray(".panel").forEach((panel) => {
		ScrollTrigger.create({
			trigger: panel,
			start: "top 20%",
			end: "bottom top",
			pin: true,
			pinSpacing: true,
			scrub: false
		});
	});

	// 横スクロール
	const wrap  = document.querySelector(".p-scwrap");
	const contents  = document.querySelector(".p-sconts");
	const items = document.querySelectorAll(".p-scitm");
	const num   = items.length;

	gsap.set(contents, { width: num * 100 + "%" });

	gsap.to(items, {
		xPercent: -100 * num,
		ease: "none",
		scrollTrigger: {
			trigger: wrap,
			start: "top 20%",
			end: "bottom top",
			pin: true,
			scrub: true
		}
	});
//SVG拡大アニメ
	gsap.to(".item__svg", {
		scrollTrigger: {
		  trigger: ".item",            // Aboutセクション全体など
		  start: "top center",         // 開始位置
		  end: "bottom center",        // 終了位置（ピンされてる間）
		  scrub: true,                 // スクロール連動
		  // markers: true,           // デバッグ用
		},
		width: "100%",               // 変化させたい値
		ease: "none"                   // スムーズに
	  });

	// テキストフェードイン（スクロール連動）
	gsap.from(".item__title", {
		scrollTrigger: {
			trigger: ".item__title",
			start: "top 80%",
			//toggleActions: "play reverse play reverse"
			toggleActions: "play none none none"
		},
		opacity: 0,
		y: 30,
		duration: 1,
	});

	gsap.from(".item__subtitle", {
		scrollTrigger: {
			trigger: ".item__subtitle",
			start: "top 90%",
			toggleActions: "play none none none"
		},
		opacity: 0,
		y: 30,
		duration: 1,
		delay: 0,
	});
});


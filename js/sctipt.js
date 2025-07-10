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

  //ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", () => {
	const toggle = document.querySelector(".menu-toggle");
	const nav = document.querySelector(".l-header__nav");
  
	toggle.addEventListener("click", () => {
	  toggle.classList.toggle("open");
	  nav.classList.toggle("open");
	});
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
  smooth:true,
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

document.addEventListener("DOMContentLoaded", () => {
	// SVGループアニメ
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

	document.querySelectorAll(".item").forEach(item => new LoopingSVG(item));

	document.addEventListener("DOMContentLoaded", () => {
		const galImg = document.querySelector('.l-galwp img');
		const items = document.querySelectorAll(".p-scitm");
		const num = items.length;
	  
		// 横スクロール幅を先にセット
		gsap.set(".p-sconts", { width: `${num * 100}%` });
	  
		galImg.onload = () => {
		  const galScrollLength = galImg.scrollWidth - window.innerWidth;
	  
		  // GAL 横スクロール
		  ScrollTrigger.create({
			trigger: ".l-gal",
			start: "top top",
			end: "+=" + galScrollLength,
			scrub: true,
			pin: true,
			anticipatePin: 1,
			onLeave: () => {
			  setupBicycle(); // bicycle開始
			}
		  });
	  
		  ScrollTrigger.refresh();
		};
	  
		function setupBicycle() {
		  const totalScroll = window.innerWidth * (num - 1);
	  
		  // Bicycle 横スクロール
		  ScrollTrigger.create({
			trigger: ".p-scwrap",
			start: "top top",
			end: "+=" + totalScroll,
			scrub: true,
			pin: ".p-scwrap",
			anticipatePin: 1,
			onLeave: () => {
			  setupPanels(); // MAPなどpanel開始
			}
		  });
	  
		  ScrollTrigger.refresh();
		}
	  
		function setupPanels() {
		  gsap.utils.toArray(".panel").forEach((panel) => {
			ScrollTrigger.create({
			  trigger: panel,
			  start: "top top",
			  end: "bottom top",
			  pin: true,
			  pinSpacing: false,
			});
		  });
	  
		  ScrollTrigger.refresh();
		}
	  });

	// パネル（ピン固定）調整：Aboutなど
	gsap.utils.toArray(".panel").forEach((panel) => {
		ScrollTrigger.create({
			trigger: panel,
			start: "top 10%", // 横スクロールと被らないよう調整
			end: "bottom-=100 top",
			pin: true,
			pinSpacing: false,
			scrub: false,
			markers:true,
		});
	});

	// SVG拡大アニメ
	gsap.to(".item__svg", {
		scrollTrigger: {
			trigger: ".item",
			start: "top center",
			end: "bottom center",
			scrub: true,
			// markers: true,
		},
		width: "100%",
		ease: "none"
	});

	// テキストフェードイン
	gsap.from(".item__title", {
		scrollTrigger: {
			scrollTrigger: {
			trigger: ".item__title",
			start: "top 80%",
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
	});

	// ScrollTriggerレイアウト再評価（念押し）
	window.addEventListener("load", () => {
		ScrollTrigger.refresh();
	});
});


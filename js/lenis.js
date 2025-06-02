
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



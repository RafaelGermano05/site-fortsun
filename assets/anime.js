import anime from 'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js';

anime({
  targets: 'h2 span',
  translateY: [
    { value: '-2.75rem', easing: 'easeOutExpo', duration: 700 },
    { value: 0, easing: 'easeOutBounce', duration: 900, delay: 100 }
  ],
  rotate: {
    value: '-1turn',
    delay: 100
  },
  delay: (_, i) => i * 60,
  easing: 'easeInOutCirc',
  loopDelay: 1000,
  loop: true
});
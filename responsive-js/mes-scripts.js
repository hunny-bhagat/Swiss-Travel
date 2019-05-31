//SWIPER SLIDESHOW
var swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 1,
  effect: 'slide', //essayez aussi 'fade' ou 'flip'
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
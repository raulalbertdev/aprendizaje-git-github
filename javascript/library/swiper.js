const swiper = new Swiper('.swiper', {
    loop: true, // Repetir las diapositivas
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    effect: 'slide', // Efecto de deslizamiento
  });
'use strict'

document.addEventListener('click', documentClick);

function documentClick(e){
    const targetIcon = e.target;

    if(targetIcon.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu-open');
    }
}

// =============== SLIDER ================
const swiper = new Swiper('.slider-material', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
  });
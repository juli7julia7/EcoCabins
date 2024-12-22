'use strict'

document.addEventListener('click', documentClick);

function documentClick(e){
    const targetIcon = e.target;

    if(targetIcon.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu-open');
        document.querySelector('html').classList.toggle('scroll-off');
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



  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } 
      // else {
      //   entry.target.classList.remove('show');
      // }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  



  const observerB = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('showb');
      } 
      // else {
      //   entry.target.classList.remove('show');
      // }
    });
  });
  
  const hiddenbElements = document.querySelectorAll('.hiddenb');
  hiddenbElements.forEach((el) => observerB.observe(el));
'use strict'

document.addEventListener('click', documentClick);

function documentClick(e){
    const targetIcon = e.target;

    if(targetIcon.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu-open');
    }
}
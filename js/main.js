const close_warning = document.querySelector('.close_warning');
const warning = document.querySelector('.warning');
const menu_arrow = document.querySelectorAll('.menu_arrow');
const wrapper = document.querySelector('.wrapper');
const menu__navbar = document.querySelector('.menu__navbar');
const sublink = document.querySelectorAll('.sublink');
const dot_menu = document.querySelector('.dot_menu');
const cart = document.querySelector('.cart');
const profile = document.querySelector('.profile');
const header__menu = document.querySelector('.header__menu');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const body = document.body;
let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

if(isMobile.any()){
		body.classList.add('touch');
      for(let i=0; i<menu_arrow.length; i++){
         menu_arrow[i].addEventListener('click', ()=>{
               if (!menu_arrow[i].classList.contains('_active')) {
                  closeAllSubMenu();
               }
               menu_arrow[i].classList.toggle('_active');
               sublink[i].classList.toggle('open');
               document.addEventListener('keydown', (e)=>{
                  if (e.key == 'Escape' && menu_arrow[i].classList.contains('_active')){
                     menu_arrow[i].classList.remove('_active');
                     sublink[i].classList.remove('open');
                     }
               })
         })
      }
} else {
   body.classList.add('mouse');
}
close_warning.addEventListener('click', ()=>{
   warning.style = 'display: none';
})

const swiper = new Swiper('.swiper', {
   grabCursor: true,
   slideToClickedSlide: true,
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },

   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   spaceBetween: 30,
   slidesPerView: 'auto',
 });

 function closeAllSubMenu() {
   Array.from(sublink).forEach(
      item => item.classList.remove('open'));
   Array.from(menu_arrow).forEach(
      item => item.classList.remove('_active'));
};


 //            Close Burger Exc
dot_menu.addEventListener('click', () =>{
   dot_menu.classList.toggle('active');
   cart.classList.toggle('menu-active');
   profile.classList.toggle('menu-active');
   header__menu.classList.toggle('menu-active');
   header.classList.toggle('menu-active');
   body.classList.toggle('_lock');
   main.classList.toggle('_lock');

   // warning.style = 'display: none';
})

document.addEventListener('keydown', (e)=>{
   if (e.key == 'Escape' && dot_menu.classList.contains('active')){
         dot_menu.classList.remove('active');
         cart.classList.remove('menu-active');
         profile.classList.remove('menu-active');
         header__menu.classList.remove('menu-active');
         header.classList.remove('menu-active');
         body.classList.remove('_lock');
         main.classList.remove('_lock');
   }
})
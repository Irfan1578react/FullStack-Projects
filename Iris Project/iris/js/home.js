const hamburger = document.getElementsByClassName('hamburger')[0];
const navList = document.getElementsByClassName('header_nav')[0];
const pro=document.getElementsByClassName('li_product')[0];
const lang=document.getElementsByClassName('language')[0];
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active'); 
  pro.classList.toggle('active');
});
pro.addEventListener('click',() => {
  pro.classList.toggle('active');
});


const container = document.querySelector('.iris_animation_bg');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY-1200; 
  container.style.transform = `translateX(-${scrollPosition*0.5}px)`
});
window.addEventListener('scroll', function() {
  const background = document.querySelector('.waves');  
  const scrollPosition = window.pageYOffset;  
  
  background.style.transform = `translateY(-${scrollPosition * 0.5}px)`;  
});
window.addEventListener('scroll', function() {
  const background = document.querySelector('.wavefly');  
  const scrollPosition = window.pageYOffset; 
      background.style.transform = `translate(-50%, -50%) rotate(-${scrollPosition * 0.2}deg)`;
 
});

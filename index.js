const weaper = document.querySelector('.form-control');
const btn = document.querySelector('.but1');
const bd = document.querySelector('.bd');
weaper.addEventListener('click',()=>{
     weaper.classList.remove('active');
});

btn.addEventListener('click',()=>{
    weaper.classList.add('active-popup');
});

bd.addEventListener('click',()=>{
    weaper.classList.remove('active-popup');
});


import Swiper from'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  let section=document.querySelectorAll('section');
  let navlink=document.querySelectorAll('.navbar a');
  window.onscroll=()=>{
    section.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop-150;
  })
  }

// collapsible nav-bar //

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}






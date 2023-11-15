const menu = document.querySelector('.nav__btns-menu');
const night = document.querySelector('.nav__btns-night');
const navList = document.querySelector('.nav__list');
const nav = document.querySelector('.nav');
const navImg = document.querySelector('.nav__logo-img');
const headerBtn = document.querySelectorAll('.header__slider-btn');
const video = document.querySelector('.header__video');
const faqs = document.querySelectorAll('.faq__box');
const profiles = document.querySelectorAll('.testimonials__profile');
const testimonials = document.querySelectorAll('.testimonials__content');

const preloader = document.querySelector('.preloader');
let nightCheck;


menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  navList.classList.toggle('active');
});

night.addEventListener('click', () => {
  night.classList.toggle('active');
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    navImg.src = './assets/img/logo-d.svg';
    localStorage.setItem('nightChecker', true)
  } else {
    navImg.src = './assets/img/logo.svg';
    localStorage.setItem('nightChecker', false)
  }
});

window.addEventListener('load', () => {
  nightCheck = localStorage.getItem('nightChecker');
  if (nightCheck === 'true') {
    document.body.classList.add('dark');
    navImg.src = './assets/img/logo-d.svg';
  } else {
    document.body.classList.remove('dark');
    navImg.src = './assets/img/logo.svg';
  }
});

const headerSlider = manual => {
  headerBtn.forEach(btn => {
    btn.classList.remove('active');
  });
  headerBtn[manual].classList.add('active');
  video.src = `./assets/video/header${manual+1}.mp4`;
  video.classList.remove('active');
  setInterval(() => {
    video.classList.add('active');
  }, 150);
};

headerBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    headerSlider(i);
  });
});

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});

profiles.forEach(profile => {
  profile.addEventListener('click', () => {
    for (let i = 0; i < profiles.length; i++) {
      profiles[i].classList.remove('active');
    }
    profile.classList.add('active');
    const order = profile.getAttribute('data-number');
    testimonials.forEach(testimonial => {
      testimonial.style.display = 'none';
    });
    document.querySelector(`[data-order="${order}"]`).style.display = 'flex';
  });
});

window.addEventListener('load', () => {
  preloader.style.display = 'none';
});
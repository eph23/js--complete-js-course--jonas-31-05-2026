'use strict';

const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.show-modal');

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', function () {
    console.log('clicked', btn.textContent);
  });
});

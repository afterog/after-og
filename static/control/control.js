

(function () {
  [...document.querySelectorAll('.control')].forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const url = 'http://127.0.0.1:5500/index.html';
      location.href = url + `#${e.target.getAttribute('data-id')}`;
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})()

const handleLoading = e => {
  document.querySelector('#loader').style.display = 'none';
  document.querySelector('.container').style.display = 'grid';
}

window.addEventListener('load', handleLoading);
// html elements declaration
const toggler_btn = document.querySelector('.navbar-toggler')
const logo = document.querySelector('.logo')
const nav = document.querySelector('.navbar')
const navbar_list = document.querySelector('.navbar-list')
const icon = document.querySelector('.icon')
const swap = icon.innerHTML
let isOpen = false

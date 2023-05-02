// html elements declaration

const toggler_btn = document.querySelector('.navbar-toggler')
const logo = document.querySelector('.logo')
const nav = document.querySelector('.navbar')
const navbar_list = document.querySelector('.navbar-list')
const icon = document.querySelector('.icon')
const loader = document.querySelector('#loader')
const swap = icon.innerHTML
let isOpen = false


const handleLoading = e => {
  loader.style.display = 'none'
}

window.addEventListener('load', handleLoading)

  (function () {
    [...document.querySelectorAll(".control")].forEach(button => {
      button.addEventListener("click", function () {
        try {
          const activeBtn = document.querySelector(".active-btn");
          if (activeBtn) {
            activeBtn.classList.remove("active-btn");
            console.log("Successfully removed the 'active-btn' class.");
          } else {
            throw new Error("Element with class 'active-btn' not found.");
          }
        } catch (error) {
          console.error(error.message);
          // Handle the error and provide feedback to the user if needed.
        }

        this.classList.add("active-btn");
        try {
          const active = document.querySelector(".active")
          if (active) {
            document.classList.remove("active");
            console.log("Successfully removed the 'active' class.");
          } else {
            throw new Error("Element with class 'active' not found.");
          }
        } catch (error) {
          console.error(error.message);
          // Handle the error and provide feedback to the user if needed.
        }

        document.getElementById(button.dataset.id).classList.add("active");
      })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    })
  })();
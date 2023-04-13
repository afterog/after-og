// html elements declaration
const cards = document.querySelectorAll('.card')
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
  // document.querySelector('.container').innerHTML = `<h1> Alexoo</h1>`
}

window.addEventListener('load', handleLoading)

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
  })
},
  {
    threshold: .8,
    rootMargin: '50px'
  },
)

cards.forEach(card => {
  observer.observe(card)
})

//function that handle the navbar open and close in mobile devices
const handleNavBarClik = (e) => {
  isOpen = !isOpen
  if (isOpen) {
    nav.classList.add('fix')
    logo.classList.add('hide')
    navbar_list.classList.add('show')
    navbar_list.classList.remove('hide')
    icon.innerHTML = `<svg className="feather feather-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </svg>`

  }
  else {
    nav.classList.remove('fix')
    logo.classList.remove('hide')
    navbar_list.classList.remove('show')
    navbar_list.classList.add('hide')
    icon.innerHTML = swap
    nav.removeEventListener('blur', handleNavBarClik, false)
  }
}

nav.addEventListener("blur", (event) => {
  isOpen = true
  handleNavBarClik()
}, true);

toggler_btn.addEventListener('click', handleNavBarClik)

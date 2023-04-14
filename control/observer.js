const cards = document.querySelectorAll('.card')

const options = {
    rootMargin: '0px',
    threshold: 0.5 // change the threshold value to 0.5
};
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, options)

cards.forEach(card => {
    observer.observe(card)
})

if (window.matchMedia('(max-width: 600px)').matches) {
    observer.threshold = 0.2;
}
(function () {
  const cards = document.querySelectorAll('.card');
  const options = {
    rootMargin: '0px',
    threshold: 0.5 // change the threshold value to 0.5
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting)
    })
  }, options);
  cards.forEach(card => {
    observer.observe(card)
  });
  if (window.matchMedia('(max-width: 600px)').matches) {
    observer.threshold = 0.2;
  };


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

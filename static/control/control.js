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
      const url = 'https://afterog.netlify.app/index.html';
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

document.querySelector('.submit-btn').addEventListener('click', event => {
  event.preventDefault();
  const [fullName, email, subject, message] = [...document.querySelectorAll('.input-value')].map(element => element.value);
  if (fullName && email && subject && message) {
    const data = fetch('http://127.0.0.1:4000/getter')
      .then(res => res.json())
      .then(data => {
        return data;
      });

    console.log(data);
  }
})

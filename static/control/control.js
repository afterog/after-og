(function () {
  //scrolling beahvior when an element appear into the viewport add class and when an element leave the viewport remove class
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

//when click the navbars go to that specific page
  [...document.querySelectorAll('.control')].forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      let scrollTo = document.getElementById(e.target.getAttribute('data-id'));
      scrollTo.scrollIntoView({ behavior: 'smooth' });
    });
  });

//when cliked change the theme
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})()

//handle page loading
const handleLoading = e => {
  document.querySelector('#loader').style.display = 'none';
  document.querySelector('.container').style.display = 'grid';
}

window.addEventListener('load', handleLoading);


//handle form data
document.querySelector('.submit-btn').addEventListener('click', event => {
  event.preventDefault();
  const [fullName, email, subject, feedback] = [...document.querySelectorAll('.input-value')].map(element => element.value);
  if (fullName && email && feedback) {
    const data = {
      fullName,
      email,
      feedback
    };
    fetchGetData(data);
    return;
  }
})

const fetchGetData = (userData) => {

  fetch('https://fair-gray-goat-gown.cyclic.app/getdata')
    .then(response => response.json())
    .then(data => {
      console.log(userData);
      console.log(data);
      data.forEach(datum => {
        if (datum.fullName === userData.fullName && datum.email === userData.email) {
          console.log('name and email exist');
          return;
        }
      })
      fetchPostData(userData);
      return;
    }
    )

}

const fetchPostData = (userData) => {

  fetch('https://fair-gray-goat-gown.cyclic.app/setdata', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(responseData => {
      console.log(responseData);
    })
    .catch(error => {
      console.error(error);
    });

}

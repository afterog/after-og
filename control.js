// // Get all elements with the 'my-element' class
// const myElements = document.querySelectorAll(".my-element");

// // Function to check if an element is within the viewport
// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Function to handle the scroll event
// function onScroll() {
//   myElements.forEach(element => {
//     if (isInViewport(element)) {
//       // element.classList.add('animate__flipInX')
//       element.style.opacity = 1;
//     } else {
//       // element.classList.remove('animate__flipInX')
//       element.style.opacity = 0;
//     }
//   });
// }

// // Add a scroll event listener to the window
// window.addEventListener("scroll", onScroll);


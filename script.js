// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }
// function goToNextPage() {
//   window.location.href = 'blog1.html';
// }
// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;
//   const profileSection = document.getElementById('profile');
//   const particleWrapper = profileSection.querySelector('.particle-wrapper');
  
//   // Calculate the scale based on scroll position
//   const maxScroll = profileSection.offsetHeight;
//   const scale = 1 + (scrollPosition / maxScroll) * 0.5; // Adjust 0.5 for more/less zoom
  
//   // Apply the scale transform
//   particleWrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;
  
//   // Optional: change opacity based on scroll
//   const opacity = 1 - (scrollPosition / maxScroll);
//   particleWrapper.style.opacity = opacity;
  
// });

document.addEventListener('DOMContentLoaded', function() {
  // Get the button
  const learnMoreButton = document.querySelector('.project-btns');

  // Add click event listener to the button
  learnMoreButton.addEventListener('click', goToNextPage);

  // Function to navigate to the next page
  function goToNextPage() {
      // Replace 'next-page.html' with the actual URL of your next page
      window.location.href = 'blog.html';
  }
});
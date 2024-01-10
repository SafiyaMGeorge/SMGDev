const mainNav = document.getElementById('nav_bar');
const toggleNav = document.getElementById('hamburger');
const mainSec = document.getElementById('mainContent');
const projectLink = document.querySelectorAll('cta_btn');

toggleNav.addEventListener('click', (e) =>{
  e.preventDefault();
  const visibility = mainNav.getAttribute('data-visible');
  if(visibility === "false"){
    mainNav.setAttribute('data-visible', true);
    toggleNav.setAttribute('aria-expanded', true);
  }else{
    mainNav.setAttribute('data-visible', false);
    toggleNav.setAttribute('aria-expanded', false);
  }
 
});
mainSec.addEventListener('click', (e) =>{
  e.preventDefault();
  const visibility = mainNav.getAttribute('data-visible');
  if(visibility === 'true'){
    mainNav.setAttribute('data-visible', false);
    toggleNav.setAttribute('aria-expanded', false);
  }
})

//the block below stops the animation of the navbar sliding when the page is being resized.
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

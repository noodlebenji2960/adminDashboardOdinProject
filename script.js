const menu = document.querySelector("#hamburger");
const sidebar = document.querySelector("#sidebar");
let navToggle = document.querySelector('.nav-toggle')
let bars = document.querySelectorAll('.bar')
let resizeTimer;

navToggle.addEventListener('click', delayedSetSidebar())

window.addEventListener("resize", () => {delayedSetSidebar()});

menu.addEventListener("click", (event) => {
   if(sidebar.style.display == "none"){
      clearTimeout(resizeTimer);
      sidebar.style.display ="grid"
      bars.forEach(bar => bar.classList.add('x'));
   } else {
      clearTimeout(resizeTimer);
      sidebar.style.display = "none"
      bars.forEach(bar => bar.classList.remove('x'));
   }
});

function delayedSetSidebar() {
   const size = document.body.getBoundingClientRect();
   if (size.width <= 740) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function(){
      bars.forEach(bar => bar.classList.toggle('x'))}, 1000);
      sidebar.style.display = "none";
   } else {
      sidebar.style.display = ""
   }
};

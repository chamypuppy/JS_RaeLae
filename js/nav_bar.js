const nav_bar = document.querySelector(".nav_bar_box");
const nav_category = document.querySelector(".nav_category");
const hide = document.getElementById("hide");
const nav_btn = document.querySelector(".nav_btn");

function doClickNav(){
  nav_btn.style.color = "red";

    

  // nav_category.classList.remove(hide);
  
  // if (nav_category.getAttribute(hide)) { // id "hide"가 있는 게 true니?
  //   nav_category.removeAttribute("id", "hide")
  // } else {
  //   nav_category.setAttribute("id", "hide");
  //   // nav_category.setAttribute("id", "active");
  // }

  // (nav_category.getElementById("hide")) ? nav_category.removeAttribute("id", "hide")
  // : nav_category.setAttribute("id", "active");
  // 
  // nav_category.setAttribute("id", "active");
  // if (nav_category.getElementById(active)) {
  //   nav_category.removeAttribute("active");
  // }
  // nav_category.setAttribute("hide", "active")
}



nav_bar.addEventListener("click", (event) => {
  nav_category.classList.toggle("hide")
});
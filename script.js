const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    // Change the value as needed
    navbar.classList.add("bg-gray-800");
    navbar.classList.remove("bg-transparent");
    
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-gray-800");
  }
});

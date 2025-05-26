 
let burger_menu = document.getElementById("burger_menu");
let nav_links = document.getElementById("nav_links")

// ✅ Burger-Menü-Funktion
burger_menu.addEventListener("click", function() {
    nav_links.classList.toggle("show");
  });
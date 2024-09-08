const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
const socialList = document.getElementById("social-list");
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  socialList.classList.toggle("hidden");
});

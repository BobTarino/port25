function toggleMenu() {
    const menu = document.querySelector(".menu-links"); // menu constant targets menu-links element (within hamburger nav element)
    const icon = document.querySelector(".hamburger-icon"); // icon constant targets hamburger-icon element 
    menu.classList.toggle("open"); // when hamburger icon is clicked - adds or removes open class
    icon.classList.toggle("open");
}
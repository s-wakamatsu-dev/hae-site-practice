const menuButton = document.querySelector(".menu-button");
const headerNav = document.querySelector(".header-nav");
const menuText = document.querySelector(".menu-text");

menuButton.addEventListener("click", () => {
  headerNav.classList.toggle("is-open");
  const isOpen = headerNav.classList.contains("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));

  if (isOpen) {
    menuText.textContent = "閉じる";
    menuButton.setAttribute("aria-label", "メニューを閉じる");
  } else {
    menuText.textContent = "メニュー";
    menuButton.setAttribute("aria-label", "メニューを開く");
  }
});

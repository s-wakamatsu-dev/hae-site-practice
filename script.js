const menuButton = document.querySelector(".menu-button");
const headerNav = document.querySelector(".header-nav");
const menuText = document.querySelector(".menu-text");
const menuIcon = document.querySelector(".menu-icon");

menuButton.addEventListener("click", () => {
  headerNav.classList.toggle("is-open");
  const isOpen = headerNav.classList.contains("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));

  if (isOpen) {
    menuText.textContent = "メニュー";
    menuIcon.textContent = "×";
    menuButton.setAttribute("aria-label", "メニューを閉じる");
  } else {
    menuText.textContent = "メニュー";
    menuIcon.textContent = "☰";
    menuButton.setAttribute("aria-label", "メニューを開く");
  }

});

// 下部の「閉じる」ボタンを取得
const menuCloseButton = document.querySelector(".menu-close-button");

// 下部のボタンがクリックされたとき
menuCloseButton.addEventListener("click", () => {
  menuButton.click();
});

function sidebar() {
  //получаем элементы
  const sidebar = document.getElementById("sidebar");
  const main = document.getElementById("main");
  const burger = document.getElementById("burgerBtn");
  const closeBtn = document.getElementById("closeBtn");

  //клик на бургер(появление боковой панели)
  burger.addEventListener("click", () => {
    sidebar.style.width = "250px"; // увеличиваем ширину боковой панели(показываем её)
    main.style.marginLeft = "250px"; // увеличиваем отступ у main
    burger.style.display = "none"; // скрываем бургер
  });

  // клик на крестик(убрать)
  closeBtn.addEventListener("click", () => {
    sidebar.style.width = "0"; // скрываем боковую панель
    main.style.marginLeft = "0"; // убираем отступ у main
    burger.style.display = "block"; // показываем бургер
  });
}
let side = sidebar();
side();

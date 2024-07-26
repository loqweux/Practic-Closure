function burger() {
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("navMenu");
  const burgerIcons = burger.querySelectorAll(".burger-icon"); //все иконки

  burger.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    //переключаем активный класс у всех иконок
    burgerIcons.forEach((icon) => {
      icon.classList.toggle("active"); //переключаем класс active у каждой иконки
    });
  });
}
let step1 = burger();
step1();
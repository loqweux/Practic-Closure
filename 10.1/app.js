function task() {
  // обработчик события для отправки формы
  document.getElementById("taskForm").onsubmit = (event) => {
    event.preventDefault();
    const input = document.getElementById("taskInput"); // элемент ввода задачи
    const value = input.value; // значение, введенное пользователем

    // проверяем, введено ли значение задачи
    if (value) {
      const li = document.createElement("li"); // создаем новый список
      li.className =
        "list-group-item d-flex justify-content-between align-items-center"; // классы для стилей элемента списка
      li.innerHTML = `
              <div class="d-flex align-items-center"> 
                  <input type="checkbox" class="form-check-input me-2"> 
                  <span>${value}</span> 
                  <button class="btn btn-remove btn-sm ms-2">Удалить</button> 
              </div>
          `; // заполнение списка HTML-кодом

      const checkbox = li.querySelector("input[type='checkbox']");
      checkbox.addEventListener("change", () => {
        toggleComplete(checkbox);
      });

      const removeButton = li.querySelector("button");
      removeButton.addEventListener("click", () => {
        removeTask(removeButton);
      });

      document.getElementById("taskList").append(li); // добавляем новый элемент в список
      input.value = ""; // очищение поля ввода
    }
  };

  // функция переключения инпут checkbox
  function toggleComplete(checkbox) {
    const listItem = checkbox.closest("li"); // находим ближайший элемент списка
    if (checkbox.checked) {
      listItem.classList.add("completed"); // добавляем класс если checkbox включен
    } else {
      listItem.classList.remove("completed"); // убираем класс если checkbox выключен
    }
  }

  // функция для удаления списка
  function removeTask(button) {
    const listItem = button.closest("li"); // находим ближайший элемент списка
    listItem.remove(); // удаляем элемент списка
  }
}
let steps = task();
steps();

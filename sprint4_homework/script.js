addNewTaskBtn.addEventListener("click", function () {
  //definiowanie zmiennych - pobranie elementów oraz ich stworzenie
  const taskList = document.getElementById("taskList");
  const inputForm = document.getElementById("newTaskInputForm");
  const li = document.createElement("li");
  const liValue = document.createElement("span");
  const editField = document.createElement("input");
  liValue.textContent = inputForm.value;
  if (inputForm.value !== "") {
    inputForm.value = null;
    //funkcja do tworzenia przycisków - przyjmuje nazwe oraz fukcje
    function createBtn(btnName, btnFunction) {
      const button = document.createElement("button");
      button.addEventListener("click", btnFunction);
      button.textContent = btnName;
      return button;
    }
    const deleteBtn = createBtn("Usuń", function () {
      taskList.removeChild(li);
    });
    const editBtn = createBtn("Edytuj", function () {
      li.prepend(editField);
      //zauwazylem ze inmput do edycji ma poprzednia wartosc: ponizej ja przechwytujemy:
      editField.value = liValue.textContent;
      liValue.textContent = null;
      editBtn.style.display = "none";
      const applyBtn = createBtn("Zatwierdź zmiany", function () {
        if (editField.value !== "") {
          liValue.textContent = editField.value;
          li.removeChild(editField);
          applyBtn.style.display = "none";
          editBtn.style.display = "inline";
          li.appendChild(deleteBtn);
        } else alert("Nazwa zadania nie może być pusta.");
      });
      li.appendChild(applyBtn);
      li.appendChild(deleteBtn);
    });
    taskList.appendChild(li);
    li.appendChild(liValue);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
  } else alert("Nazwa zadania nie może być pusta.");
});
//nie wiem jak zrobic aby działał enter w formularzach, gdy opakowuje input i button w form to enter działa ale nowe li po chwili znikaja tak jakby strona sie przeładowywała :(

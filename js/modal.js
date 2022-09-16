// Получить модальный
const modal = document.getElementById("consultation");

// Получить кнопку, которая открывает модальный
const btn = document.getElementById("openForm");

// Получаем форму
let userForm = document.forms.consultingForm;

// Получаем значеия инпутов из формы модального окна
let userName = userForm.userName;
let userSurname = userForm.userSurname;
let userProblem = userForm.userProblem;
let userEmail = userForm.userEmail;
let userPhone = userForm.userPhone;

userName.onblur = function () {
  if (!userName.value) {
    // не email
    userName.classList.add("invalid");
    formNameError.innerHTML = "Пожалуйста, введите ваше имя. Поле имя обязательное.";
  }
};

userName.onfocus = function () {
  if (this.classList.contains("invalid")) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove("invalid");
    formNameError.innerHTML = "";
  }
};

userSurname.onblur = function () {
  if (!userSurname.value) {
    // нет фамилии
    userSurname.classList.add("invalid");
    formSurnameError.innerHTML = "Пожалуйста, введите вашу фамилию. Поле фамилия обязательное.";
  }
};

userSurname.onfocus = function () {
  if (this.classList.contains("invalid")) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove("invalid");
    formSurnameError.innerHTML = "";
  }
};

userEmail.onblur = function () {
  if (!userEmail.value.includes("@")) {
    // не email
    userEmail.classList.add("invalid");
    formEmailError.innerHTML = "Пожалуйста, введите правильный email.";
  }
};

userEmail.onfocus = function () {
  if (this.classList.contains("invalid")) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove("invalid");
    formEmailError.innerHTML = "";
  }
};

userPhone.onblur = function () {
  if (!userPhone.value.includes("+375")) {
    this.classList.add("invalid");
    formPhoneError.innerHTML = "Введенный телефон должен начинаться с +375.";
  }
};

userPhone.onfocus = function () {
  if (this.classList.contains("invalid")) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove("invalid");
    formPhoneError.innerHTML = "";
  }
};

// Получить кнопку, которая отправляет данные
const submit = document.getElementById("submit");

// Получить элемент <span>, который закрывает модальный
const cancel = document.getElementById("cancel");

// Получить элемент <span>, который закрывает модальный
const close = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
window.onload = function () {
  btn.onclick = function () {
    modal.style.display = "block";
  };
};

// Когда пользователь нажимает на <span> (x), закройте модальное окно
close.onclick = function () {
  modal.style.display = "none";
};
// Когда пользователь нажимает на <button> (cancel), закройте модальное окно
cancel.onclick = function () {
  modal.style.display = "none";
};

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Функция отправки формы данных юзера на сервер

function submitUserForm() {
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(userForm); // создаём объект FormData, передаём в него элемент формы
    // теперь можно извлечь данные
    const userName = formData.get("userName");
    const userSurname = formData.get("userSurname");
    const userProblem = formData.get("userProblem");
    const userEmail = formData.get("userEmail");
    const userPhone = formData.get("userPhone");

    console.log(userName);
    console.log(userSurname);
    console.log(userProblem);
    console.log(userEmail);
    console.log(userPhone);
  });
}

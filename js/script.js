var link = document.querySelector(".write-button");

var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

var button = popup.querySelector(".button-1");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var textarea = popup.querySelector(".letter-content");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
  storage = localStorage.getItem("email");
} catch (err) {
isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

button.addEventListener("click", function (evt) {
  if (!login.value || !email.value || !textarea.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

form.addEventListener("submit", function (evt) {
  if (isStorageSupport) {
    localStorage.setItem("login", login.value);
    localStorage.setItem("email", email.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27) {
    if(popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

var linkFeedback = document.querySelector(".feedback-link");
var modalFeedback = document.querySelector(".modal-feedback");
var closeFeedback = modalFeedback.querySelector(".modal-close");

var formFeedback = modalFeedback.querySelector("form");
var nameInput = modalFeedback.querySelector("[name=name]");
var emailInput = modalFeedback.querySelector("[name=email]");
var textInput = modalFeedback.querySelector("[name=text]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("nameV");
  storageEmail = localStorage.getItem("emailV");
} catch (err) {
  isStorageSupport = false;
}

linkFeedback.addEventListener("click", function(event) {
  event.preventDefault();
  modalFeedback.classList.add("modal-feedback-show");
   if (storageName) {
    nameInput.value = storageName;
    emailInput.value = storageEmail;
    textInput.focus();
  } else {
    nameInput.focus();
  }
});

closeFeedback.addEventListener("click", function (event) {
  event.preventDefault();
  modalFeedback.classList.remove("modal-feedback-show");
  modalFeedback.classList.remove("modal-error");
});

formFeedback.addEventListener("submit", function (event) {
  if (!nameInput.value || !emailInput.value) {
    event.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("nameV", nameInput.value);
      localStorage.setItem("emailV", emailInput.value);
    }
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    event.preventDefault();
    if (modalFeedback.classList.contains("modal-feedback-show")) {
      modalFeedback.classList.remove("modal-feedback-show");
      modalFeedback.classList.remove("modal-feedback-show");
    }
  }
});

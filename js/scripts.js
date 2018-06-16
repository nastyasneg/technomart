/*** services slider ***/

var serviceLinks = document.querySelectorAll(".toggle-item");
var serviceSlides = document.querySelectorAll(".services-item");
var j, h, k;

for (i = 0; i < serviceLinks.length; ++i) {
  serviceLinks[i].addEventListener("click", function (event) {
    for (j = 0; j < serviceLinks.length; ++j) {
      serviceLinks[j].classList.remove("toggle-item-current");
    }
    for (h = 0; h < serviceLinks.length; ++h) {
      if (serviceLinks[h] == this) {
        serviceLinks[h].classList.add("toggle-item-current");
        for (k = 0; k < serviceSlides.length; ++k) {
          serviceSlides[k].classList.remove("services-item-show");
        }
          serviceSlides[h].classList.add("services-item-show");
      }
    }
	})
}

/*** cart ***/

var cartLinks = document.querySelectorAll(".button-buy");
var modalCart = document.querySelector(".modal-cart");
var closeCart = modalCart.querySelector(".modal-close");
var closeCartButton = modalCart.querySelector(".button-close");

for (var i = 0; i < cartLinks.length; i++) {
	cartLinks[i].addEventListener("click", function(event){
		event.preventDefault();
		modalCart.classList.add("modal-cart-show");
	});
}

closeCart.addEventListener("click", function (event) {
  event.preventDefault();
  modalCart.classList.remove("modal-cart-show");
});

closeCartButton.addEventListener("click", function (event) {
  event.preventDefault();
  modalCart.classList.remove("modal-cart-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    event.preventDefault();
    if (modalCart.classList.contains("modal-cart-show")) {
      modalCart.classList.remove("modal-cart-show");
    }
  }
});

/*** map ***/

var linkMap = document.querySelector(".map-link");
var modalMap = document.querySelector(".modal-map");
var closeMap = modalMap.querySelector(".modal-close");

linkMap.addEventListener("click", function(event) {
  modalMap.classList.add("modal-map-show");
});

closeMap.addEventListener("click", function (event) {
  event.preventDefault();
  modalMap.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    event.preventDefault();
    if (modalMap.classList.contains("modal-map-show")) {
      modalMap.classList.remove("modal-map-show");
    }
  }
});

/*** feedback ***/

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
      modalFeedback.classList.remove("modal-error");
    }
  }
});

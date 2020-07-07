var pageType = document.querySelector(".page-body");
if (pageType.classList.contains("page-index")) {
  var promoSliderItems = document.querySelectorAll(".slide-item");
  var promoSliderControls = document.querySelectorAll(".slide-control");
  var promoSliderPrevious = document.querySelector(".shift-left");
  var promoSliderNext = document.querySelector(".shift-right");
  var promoSliderCurrentNumber = 0;
  var promoSliderNewNumber = 0;
  var servicesSliderItems = document.querySelectorAll(".services-slide-item");
  var servicesSliderButtons = document.querySelectorAll(".services-slider-button");
  var servicesSliderCurrentNumber = 0;
  var servicesSliderNewNumber = 0;
  var contactsMap = document.querySelector(".contacts-map");
  var modalMap = document.querySelector(".big-map-popup");
  var modalMapClose = modalMap.querySelector(".big-map-close");
  var contactsWrite = document.querySelector(".button-contacts");
  var modalWrite = document.querySelector(".write-us");
  var modalWriteClose = modalWrite.querySelector(".write-us-close");
  var modalWriteSend = modalWrite.querySelector(".write-us-send");
  var modalWriteName = modalWrite.querySelector(".write-us-name");
  var modalWriteForm = modalWrite.querySelector(".write-us-form");
  var modalWriteEmail = modalWrite.querySelector(".write-us-mail");
  var modalWriteText = modalWrite.querySelector(".write-us-text");
}

if (pageType.classList.contains("page-catalog")) {
  var buyButtons = document.querySelectorAll(".button-buy");
  var buyMessage = document.querySelector(".adding-goods");
  var buttonShopping = buyMessage.querySelector(".button-shopping");
  var buyMessageClose = buyMessage.querySelector(".adding-goods-close");
}

var isStorageSupport = true;
var storageName = "";
var storageMail = "";

/* проверяем localStorage */
try {
  storageName = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

if (pageType.classList.contains("page-index")) {
  /* оживление слайдера - промо-блок 1 */
  var promoSliderShift = function(newSlide, currentSlide) {
    if (promoSliderItems[newSlide].classList.contains("hide")) {
      promoSliderItems[newSlide].classList.remove("hide");
      promoSliderItems[currentSlide].classList.add("hide");
      promoSliderControls[newSlide].classList.add("current-slide");
      promoSliderControls[currentSlide].classList.remove("current-slide");
      promoSliderCurrentNumber = newSlide;
    }
  };

  for (var j = 0; j < promoSliderControls.length; j++) {
    if (promoSliderControls[j].classList.contains("current-slide")) {
      promoSliderCurrentNumber = j;
    }
  }

  promoSliderPrevious.addEventListener("click", function(evt) {
    evt.preventDefault();
    promoSliderNewNumber = promoSliderCurrentNumber - 1;
    if (promoSliderNewNumber < 0) {
      promoSliderNewNumber = promoSliderNewNumber + promoSliderItems.length;
    }
    promoSliderShift(promoSliderNewNumber, promoSliderCurrentNumber);
  });

  promoSliderNext.addEventListener("click", function(evt) {
    evt.preventDefault();
    promoSliderNewNumber = promoSliderCurrentNumber + 1;
    if (promoSliderNewNumber >= promoSliderItems.length) {
      promoSliderNewNumber = promoSliderNewNumber - promoSliderItems.length;
    }
    promoSliderShift(promoSliderNewNumber, promoSliderCurrentNumber);
  });

  promoSliderControls[0].addEventListener("click", function(evt) {
    evt.preventDefault();
    if (promoSliderItems[0].classList.contains("hide")) {
      promoSliderNewNumber = 0;
      promoSliderShift(promoSliderNewNumber, promoSliderCurrentNumber);
    }
  });

  promoSliderControls[1].addEventListener("click", function(evt) {
    evt.preventDefault();
    if (promoSliderItems[1].classList.contains("hide")) {
      promoSliderNewNumber = 1;
      promoSliderShift(promoSliderNewNumber, promoSliderCurrentNumber);
    }
  });

  /* оживление слайдера - сервисы */
  var servicesSliderShift = function(newSlide, currentSlide) {
    if (servicesSliderItems[newSlide].classList.contains("hide")) {
      servicesSliderItems[newSlide].classList.remove("hide");
      servicesSliderItems[currentSlide].classList.add("hide");
      servicesSliderButtons[newSlide].classList.add("services-slide-active");
      servicesSliderButtons[currentSlide].classList.remove("services-slide-active");
      servicesSliderCurrentNumber = newSlide;
    }
  };

  servicesSliderButtons[0].addEventListener("click", function(evt) {
    evt.preventDefault();
    if (servicesSliderItems[0].classList.contains("hide")) {
      servicesSliderNewNumber = 0;
      servicesSliderShift(servicesSliderNewNumber, servicesSliderCurrentNumber);
    }
  });

  servicesSliderButtons[1].addEventListener("click", function(evt) {
    evt.preventDefault();
    if (servicesSliderItems[1].classList.contains("hide")) {
      servicesSliderNewNumber = 1;
      servicesSliderShift(servicesSliderNewNumber, servicesSliderCurrentNumber);
    }
  });

  servicesSliderButtons[2].addEventListener("click", function(evt) {
    evt.preventDefault();
    if (servicesSliderItems[2].classList.contains("hide")) {
      servicesSliderNewNumber = 2;
      servicesSliderShift(servicesSliderNewNumber, servicesSliderCurrentNumber);
    }
  });

  /* модальное окно карты */
  contactsMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (modalMap.classList.contains("hide")) {
      modalMap.classList.remove("hide");
    }
  });

  modalMapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMap.classList.add("hide");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      modalMap.classList.add("hide");
    }
  });

  /* модальное окно с формой обратной связи */
  if (isStorageSupport) {
    storageMail = localStorage.getItem("email");
  }

  contactsWrite.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (modalWrite.classList.contains("hide")) {
      modalWrite.classList.remove("hide");
      modalWrite.classList.add("modal-show");
      if (storageName) {
        modalWriteName.value = storageName;
        if (storageMail) {
          modalWriteEmail.value = storageMail;
          modalWriteText.focus();
        } else {
          modalWriteEmail.focus()
        }
      } else {
       modalWriteName.focus();
     }
    }
  });

  modalWriteClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWrite.classList.add("hide");
    modalWrite.classList.remove("modal-error");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      modalWrite.classList.add("hide");
      modalWrite.classList.remove("modal-error");
    }
  });

  modalWriteForm.addEventListener("submit", function(evt) {
    if (!modalWriteName.value || !modalWriteEmail.value || !modalWriteText.value) {
      evt.preventDefault();
      modalWrite.classList.remove("modal-error");
      modalWrite.offsetWidth = modalWrite.offsetWidth;
      modalWrite.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", modalWriteName.value);
        localStorage.setItem("email", modalWriteEmail.value);
      }
    }
  });
}

if (pageType.classList.contains("page-catalog")) {
  buyButtons.forEach(function(button) {
    button.addEventListener("click", function(evt) {
      evt.preventDefault();
      if (buyMessage.classList.contains("hide")) {
        buyMessage.classList.remove("hide");
      }
    });
  });

  buttonShopping.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyMessage.classList.add("hide");
  });

  buyMessageClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyMessage.classList.add("hide");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      buyMessage.classList.add("hide");
    }
  });
}

// modal

let modal = document.getElementById("myModal");

let span = document.getElementsByClassName("modal-button");

let allBtn = document.querySelectorAll(".service-body__info__button");
allBtn.forEach(function (element) {
  element.onclick = showModal;
});

function showModal() {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// accordion

var accItem = document.getElementsByClassName("accordionItem");
var accHD = document.getElementsByClassName("accordionItemHeading");
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}
function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordionItem close";
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.className = "accordionItem open";
  }
}

// burger

const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", function (e) {
    menuBody.classList.toggle("_lock");
    iconMenu.classList.toggle("__active");
    menuBody.classList.toggle("__active");
  });
}

// scroll on click

const menuLinks = document.querySelectorAll(".menu__link");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink && document.querySelector(menuLink)) {
      const gotoBlock = document.querySelector(menuLink);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      if (iconMenu.classList.contains("__active")) {
        menuBody.classList.remove("_lock");
        iconMenu.classList.remove("__active");
        menuBody.classList.remove("__active");
      }
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

// Swiper

const swiperGallery = new Swiper(".swiper-gallery", {
  loop: true,
  navigation: {
    nextEl: ".right",
    prevEl: ".back",
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px

    // when window width is >= 480px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    974: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const swiperVideo = new Swiper(".swiper-video", {
  loop: true,
  navigation: {
    nextEl: ".right",
    prevEl: ".back",
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    932: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

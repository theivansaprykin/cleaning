let modal = document.getElementById("myModal");

let span = document.getElementsByClassName("modal-button")[0];

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

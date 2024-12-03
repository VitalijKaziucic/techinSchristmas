const giftBtn = document.querySelector("#giftBtn");

giftBtn.addEventListener("click", function () {
  const imgContainer = [...this.parentElement.firstElementChild.children];
  imgContainer.forEach((el) => el.classList.toggle("hide"));
  this.previousElementSibling.classList.toggle("hide");
  this.parentElement.previousElementSibling.classList.toggle("hide");
  this.parentElement.nextElementSibling.classList.toggle("hide");
  this.innerText = this.innerText === "<-Back" ? "Open your gift" : "<-Back";
});

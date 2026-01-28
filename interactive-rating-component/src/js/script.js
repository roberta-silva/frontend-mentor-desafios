const ratingButtons = document.querySelectorAll(".rating__btn");
const submitButton = document.querySelector(".rating__submit");
const ratingSection = document.querySelector(".rating");
const thankYouSection = document.querySelector(".thank-you");
const thankYouRating = document.querySelector(".thank-you__rating");

const activeClass = "active";
let selectedRating = null;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButtons.forEach((btn) => btn.classList.remove(activeClass));
    button.classList.add(activeClass);
    selectedRating = button.dataset.value;
  });
});

submitButton.addEventListener("click", () => {
  if (!selectedRating) {
    alert("Please select a rating");
    return;
  }
  console.log("Rating enviado:", selectedRating);

  ratingSection.classList.add("hidden");
  thankYouSection.classList.remove("hidden");
  thankYouRating.textContent = selectedRating;
});

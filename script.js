console.log("Hello, World");

const faqShow = document.querySelector(".faq-answers");
const faqArrow = document.querySelector(".icon");
const idea = document.querySelector(".feature-input");
const item = document.createElement("p");
const newFeat = document.querySelector(".feature-submit");

faqArrow.addEventListener("click", function () {
  faqShow.classList.toggle("hidden-faq");
});

function addNewFeature() {
  if (idea.value.length == 0) {
    alert("Please add Feature");
  } else {
    alert(idea.value + " That's a great new feature");
  }
}

newFeat.addEventListener("click", addNewFeature);

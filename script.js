console.log("Hello, World");

const faqArrow = document.querySelector(".faq-arrow");
const faqShow = document.querySelector(".faq-answers");
const idea = document.querySelector(".feature-input");
const item = document.createElement("p");
const newFeat = document.querySelector(".feature-submit");

const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();

console.log(currentYear);

year.textContent = currentYear;

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

// SMooth Scrolling

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

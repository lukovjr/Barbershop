const toTopButton = document.getElementById("to-top-btn");

window.addEventListener("load", function () {
  if (window.scrollY > 100) {
    toTopButton.style.display = "block";
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
});

toTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

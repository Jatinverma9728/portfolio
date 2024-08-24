document.getElementById("toggleButton").addEventListener("click", function () {
  var moreText = document.getElementById("moreText");
  var dots = document.getElementById("dots");
  var button = document.getElementById("toggleButton");

  if (moreText.classList.contains("hidden")) {
    moreText.classList.remove("hidden");
    moreText.classList.add("show");
    dots.classList.add("hidden");
    button.textContent = "Read Less";
  } else {
    moreText.classList.add("hidden");
    moreText.classList.remove("show");
    dots.classList.remove("hidden");
    button.textContent = "Read More";
  }
});

document.querySelectorAll(".read-more-btn").forEach(button => {
  button.addEventListener("click", event => {
    const currentBtn = event.target;
    const currentText = currentBtn.previousElementSibling.querySelector(".read-more-text");

    if (currentText.style.display === "inline") {
      // Hide the text with a smooth transition
      currentText.style.opacity = 0;
      setTimeout(() => {
        currentText.style.display = "none";
      }, 300); // Wait for the transition to complete
    } else {
      // Show the text with a smooth transition
      currentText.style.display = "inline";
      setTimeout(() => {
        currentText.style.opacity = 1;
      }, 0); // Start transition immediately
    }

    // Toggle button text
    currentBtn.textContent = currentText.style.display === "inline" ? "Read Less..." : "Read More...";
  });
});

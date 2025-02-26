const navbar = document.getElementById("navbar");
const nav = document.getElementById("nav");

function changeColors(divId, color) {
  const container = document.getElementById(divId);
  if (container) {
    const elements = container.querySelectorAll("*"); // Select all elements inside the div
    elements.forEach((element) => {
      element.style.color = color; // Change text color
    });
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 450) {
    console.log("Scrolled down");
    navbar.classList.add("bg-white", "text-black");
    // navbar.classList.add("text-red-100");
    // navbar.style.zIndex = "12";
    // navbar.style.background = "white";

    // const elements = nav.querySelectorAll("*");
    // elements.forEach((element) => {
    //   element.style.color = "#ff4c60";
    // });
  } else {
    console.log("Scrolled up");
    navbar.classList.remove("bg-white", "text-black");
    navbar.classList.add("text-white");
    // navbar.classList.remove("text-red-100");
    // navbar.classList.add("text-white", "text-gradient");
    // navbar.style.zIndex = "12";
    // // navbar.classList.remove('bg-red-900', 'shadow-lg');
    // navbar.classList.add("bg-transparent");
    // navbar.style.background =
    //   "linear-gradient(135deg, #6c55f9 0%, #ff4c60 100%);";

    // const elements = nav.querySelectorAll("*");
    // elements.forEach((element) => {
    //   element.style.color = "white";
    // });
  }
});

// Add this to your script.js file

document.addEventListener("DOMContentLoaded", function () {
  // Text to be typed
  const textSequence = [
    " I am Gabriel Kyeremateng",
    "I love to code",
    "I love to solve complex problems",
    "I am HIM",
  ];

  const typedTextElement = document.getElementById("typed-text");
  const cursorElement = document.querySelector(".typing-cursor");

  // Check if elements exist
  if (!typedTextElement || !cursorElement) {
    console.error("Typing animation elements not found");
    return;
  }

  let sequenceIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 150;
  let deletingDelay = 50;
  let pauseDelay = 1500;

  function typeEffect() {
    const currentText = textSequence[sequenceIndex];

    // If deleting text
    if (isDeleting) {
      typedTextElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      // If all text is deleted
      if (charIndex === 0) {
        isDeleting = false;
        sequenceIndex = (sequenceIndex + 1) % textSequence.length;
        setTimeout(typeEffect, 500);
        return;
      }

      setTimeout(typeEffect, deletingDelay);
    }
    // If typing text
    else {
      typedTextElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      // If all text is typed
      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, pauseDelay);
        return;
      }

      setTimeout(typeEffect, typingDelay);
    }
  }

  // Start the typing animation
  setTimeout(typeEffect, 1000);
});

// Text to be typed out
const text = "Hi, I'm Shizuha! I'm a passionate gamer and content creator. I love playing PUBG, Call of Duty, and Mobile Legends. Follow me on TikTok for more gaming content!";

// Get the element where the text will be displayed
const typingText = document.getElementById("typing-text");

let index = 0; // Start from the first character

// Function to type out the text
function typeText() {
  if (index < text.length) {
    // Add the next character to the text content
    typingText.textContent += text.charAt(index);
    index++; // Move to the next character
    setTimeout(typeText, 50); // Wait 50ms before typing the next character
  } else {
    // Animation complete, stop the cursor blinking
    typingText.style.borderRight = "none";
  }
}

// Start the typing animation when the page loads
window.onload = typeText;
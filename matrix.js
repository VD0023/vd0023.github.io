// Create an array of possible characters for the falling digits
const chars = "1234567890";

// Function to generate a random digit from the array
function getRandomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
}

// Create falling digits and add them to the container
function createFallingDigits() {
    const container = document.querySelector(".matrix-container");
    const windowHeight = window.innerHeight;

    for (let i = 0; i < windowHeight / 20; i++) {
        const digit = document.createElement("span");
        digit.className = "falling-digit";
        digit.style.left = Math.random() * 100 + "vw";
        digit.style.animationDuration = Math.random() * 3 + 2 + "s";
        digit.innerText = getRandomChar();
        container.appendChild(digit);
    }
}

createFallingDigits();

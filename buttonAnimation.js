// Function to zoom in and navigate to a new page
function zoomInAndNavigate(url) {
    const button = document.getElementById("animate-button");
    const digits = document.querySelectorAll(".falling-digit");

    // Hide the falling digits
    digits.forEach(digit => {
        digit.style.display = "none";
    });

    // Zoom in the button
    button.style.animation = "zoom-in 0.5s ease";

    // Delay navigation to allow the zoom-in animation to complete
    setTimeout(function () {
        window.location.href = url;
    }, 500);
}

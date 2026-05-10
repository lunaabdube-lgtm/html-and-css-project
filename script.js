/* ── Best Book of the Month Slider ── */
const bestBookImg = document.querySelector(".best-book-image img");

if (bestBookImg) {
    const bookImages = [
        "pics/co4.jpg",
        "pics/co1.jpg",
        "pics/co3.jpg"
    ];

    let index = 0;

    // add fade transition
    bestBookImg.style.transition = "opacity 0.6s ease-in-out";

    function changeImage() {
        // fade out
        bestBookImg.style.opacity = 0;

        setTimeout(() => {
            // change image while invisible
            index = (index + 1) % bookImages.length;
            bestBookImg.src = bookImages[index];

            // fade back in
            bestBookImg.style.opacity = 1;
        }, 600); // matches transition duration
    }

    setInterval(changeImage, 3000);
}



// feedback

const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {  // Only attach if the form exists
    feedbackForm.onsubmit = function(e) {
        e.preventDefault();  // Prevent page reload
        let name = document.getElementById("name").value;
        document.querySelector(".feedback-title").textContent = `Thank you, ${name}!`;
        feedbackForm.reset();  // Optional: clear the form
    };
}

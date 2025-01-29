// Code for the countdown timer and celebration

const countdownSection = document.getElementById('countdown-section');
const afterSection = document.getElementById('after-section');
const countdownDisplay = document.getElementById('countdown');
// const countdownMusic = document.getElementById('countdown-music');
// const celebrationMusic = document.getElementById('celebration-music');
const confettiCanvas = document.getElementById('confetti-canvas');

// Set target date
// const targetDate = new Date().getTime() + 5 * 1000; // 5 seconds for demo
const targetDate = new Date('2025-01-29T00:00:00+03:00').getTime();

// Start countdown music
// countdownMusic.muted = true;
// countdownMusic.play().catch(error => {
//     console.warn('Muted playback started:', error);
// });

// Unmute after 1 minute (60000 milliseconds)
setTimeout(() => {
    countdownMusic.muted = false;
    console.log('Music unmuted');
}, 2000);

    // Countdown logic
const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        clearInterval(timer);
        startCelebration();
    } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}, 1000);

// Slideshow logic
const slider = document.getElementById('slider');
const images = [
    'assets/images/img.jpg',
    'assets/images/img4.jpg',
];
let currentImageIndex = 0;
const slideDuration = 3000; // 3 seconds

function startSlideshow() {
    setInterval(() => {
        // Update the background image
        slider.style.backgroundImage = `url('${images[currentImageIndex]}')`;

        // Move to the next image (loop back to the start if at the end)
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }, slideDuration);
}

// Call the slideshow function after the countdown ends
function startCelebration() {
    countdownSection.classList.add('hidden');
    afterSection.classList.remove('hidden');

    // Stop countdown music and start celebration music
    // countdownMusic.pause();
    // celebrationMusic.play();
    // celebrationMusic.muted = false

    // Start confetti continuously
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    setInterval(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.9 },
        });
    }, 1000); // Repeat confetti every 0.5 seconds

    // Start slideshow
    startSlideshow();
}


// Open popup
function revealMessage() {
    document.getElementById('popup').classList.remove('hidden');
}

// Close popup
function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}

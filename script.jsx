// Code for the countdown timer and celebration

const countdownSection = document.getElementById('countdown-section');
const afterSection = document.getElementById('after-section');
const countdownDisplay = document.getElementById('countdown');
const countdownMusic = document.getElementById('countdown-music');
const celebrationMusic = document.getElementById('celebration-music');
const confettiCanvas = document.getElementById('confetti-canvas');

// Set target date
const targetDate = new Date().getTime() + 10 * 1000; // 5 seconds for demo

// Start countdown music
countdownMusic.play();

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

    // After countdown logic
function startCelebration() {
    countdownSection.classList.add('hidden');
    afterSection.classList.remove('hidden');

    // Stop countdown music and start celebration music
    countdownMusic.pause();
    celebrationMusic.play();

    // Start confetti
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Reveal message
function revealMessage() {
    document.getElementById('message').style.display = 'block';
}
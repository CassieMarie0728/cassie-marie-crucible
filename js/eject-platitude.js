// The "Eject Platitude" Button: Because someone has to say it.
const platitudeBurns = [
    "Did you just say 'everything happens for a reason'? OUT. NOW.",
    "If I wanted empty comfort, I'd buy a Hallmark card. Get out.",
    "Your 'thoughts and prayers' just got curb-stomped. EJECT!",
    "Take your 'they're in a better place' and find the nearest exit.",
    "Platitude Alert: Security is on the way to escort you out.",
    "If you say 'time heals all wounds' one more time, I'm calling my lawyer.",
    "Go sprinkle your toxic positivity somewhere else.",
    "Congratulations, you triggered the sarcasm alarm. Goodbye.",
    "Hope is not a strategy, and neither is your advice. EJECTED.",
    "That platitude just failed the vibe check. Try again never."
];

function yellAtPlatitude() {
    // Pick a random burn
    const burn = platitudeBurns[Math.floor(Math.random() * platitudeBurns.length)];
    // Display it
    document.getElementById("yellMessage").textContent = burn;
    // Try to yell it
    if ('speechSynthesis' in window) {
        const utter = new window.SpeechSynthesisUtterance(burn);
        utter.rate = 1.1;
        utter.pitch = 0.85;
        utter.volume = 1.0;
        utter.voice = window.speechSynthesis.getVoices().find(v => v.lang.startsWith('en')) || null;
        window.speechSynthesis.cancel(); // Stop any previous
        window.speechSynthesis.speak(utter);
    } else {
        // Fallback: shake the screen (optional, for extra drama)
        document.body.style.animation = "shake 0.4s";
        setTimeout(() => { document.body.style.animation = ""; }, 400);
    }
}

document.getElementById("ejectPlatitudeBtn").addEventListener("click", yellAtPlatitude);

// (Optional) Add a little CSS shake animation for fallback
const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
    0% { transform: translate(0, 0); }
    20% { transform: translate(-20px, 0); }
    40% { transform: translate(20px, 0); }
    60% { transform: translate(-20px, 0); }
    80% { transform: translate(20px, 0); }
    100% { transform: translate(0, 0); }
}`;
document.head.appendChild(style);
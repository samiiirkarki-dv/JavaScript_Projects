let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Function to populate voices
function populateVoices() {
    voices = window.speechSynthesis.getVoices();

    // Clear existing options
    voiceSelect.innerHTML = "";

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });

    // Set default voice
    if (voices.length > 0) speech.voice = voices[0];
}

// Some browsers load voices asynchronously
window.speechSynthesis.onvoiceschanged = populateVoices;

// Also call it once in case voices are already available
populateVoices();

// Update voice when user selects
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Speak button
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
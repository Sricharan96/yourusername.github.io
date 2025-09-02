
// function startOnboarding() {
//   window.location.href = "onboarding1.html";
// }
// function next(page) {
//   window.location.href = page;
// }
// function copyResponse() {
//   const text = document.querySelector('.response-box').innerText;
//   navigator.clipboard.writeText(text).then(() => {
//     alert("Response copied to clipboard!");
//   });
// }

// ✅ Navigation Functions
function startOnboarding() {
  window.location.href = "onboarding1.html";
}
function next(page) {
  window.location.href = page;
}

// ✅ Copy Response Function
function copyResponse() {
  const text = document.querySelector('.response-box').innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Response copied to clipboard!");
  });
}

// ✅ Voice Recognition Logic
const voiceBtn = document.getElementById("voiceBtn");
const voiceResult = document.getElementById("voiceResult");
const tooltipText = document.getElementById("tooltipText");

if (voiceBtn) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-IN';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  voiceBtn.addEventListener("click", () => {
    tooltipText.textContent = "🎤 Listening...";
    recognition.start();
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    voiceResult.innerText = transcript;
    tooltipText.textContent = "✅ Captured!";
  };

  recognition.onerror = (event) => {
    tooltipText.textContent = "❌ Error: " + event.error;
  };
}


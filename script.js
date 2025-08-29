
function startOnboarding() {
  window.location.href = "onboarding1.html";
}
function next(page) {
  window.location.href = page;
}
function copyResponse() {
  const text = document.querySelector('.response-box').innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Response copied to clipboard!");
  });
}

async function translateText() {

let text = document.getElementById("inputText").value;
let source = document.getElementById("sourceLang").value;
let target = document.getElementById("targetLang").value;

const response = await fetch("https://libretranslate.de/translate", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
q: text,
source: source,
target: target,
format: "text"
})
});

const data = await response.json();
document.getElementById("outputText").innerText =
data.translatedText;
}

function copyText() {
let text = document.getElementById("outputText").innerText;
navigator.clipboard.writeText(text);
alert("Copied!");
}

function speakText() {
let text = document.getElementById("outputText").innerText;
let speech = new SpeechSynthesisUtterance(text);
window.speechSynthesis.speak(speech);
}

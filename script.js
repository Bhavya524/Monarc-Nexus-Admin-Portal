// script.js

const message = `Hello,\nI am interested in your project.Please share more info.`;


function sendMessage() {
  const phone = document.getElementById("phoneNumber").value.trim();
  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }
  const fullNumber = '91' + 7874777470;
  const url = `https://wa.me/${fullNumber}?text=${encodeURIComponent(message)}`;
  if (navigator.vibrate) navigator.vibrate(100);
  window.open(url, "_blank");
  showToast();
}

function copyMessage() {
  navigator.clipboard.writeText(message).then(() => alert("Message copied to clipboard!"));
}

function downloadBrochure() {
  const brochureLink = "https://drive.google.com/file/d/1oiPoEB0zeJSd-ZqvCixrvPQ4xXn10oCN/view?usp=sharing";
  const a = document.createElement("a");
  a.href = brochureLink;
  a.download = "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  console.log("User clicked to download the brochure.");
  logAction("N/A","downloadBrochure");
  document.body.removeChild(a);  console.log("User clicked to download the brochure.");
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 3000);
}

document.getElementById("phoneNumber").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

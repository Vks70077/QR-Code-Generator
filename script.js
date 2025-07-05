function generateQRCode() {
  const input = document.getElementById("qrInput").value.trim();
  const result = document.getElementById("qrResult");

  if (input === "") {
    result.innerHTML = "<p style='color:red;'>Please enter some text or URL.</p>";
    return;
  }

  const qrAPI = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(input)}&size=200x200`;

  result.innerHTML = `
    <img src="${qrAPI}" alt="QR Code">
    <p>Right-click to save the image</p>
  `;
}

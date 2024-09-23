document.getElementById("generateBtn").addEventListener("click", function () {
  const otr = generateOTP();
  document.getElementById("otrDisplay").textContent = otr;
});

function generateOTP() {
  let otr = "";
  for (let i = 0; i < 4; i++) {
    otr += Math.floor(Math.random() * 10);
  }
  return otr;
}

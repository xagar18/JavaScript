console.log("test");

function calOtp() {
  const max = 999999;
  const min = 100000;
  const newOtp = Math.floor(Math.random() * (max - min + 1)) + min;
  const otp = newOtp.toString();

  document.getElementById("item1").textContent = otp[0];
  document.getElementById("item2").textContent = otp[1];
  document.getElementById("item3").textContent = otp[2];
  document.getElementById("item4").textContent = otp[3];
  document.getElementById("item5").textContent = otp[4];
  document.getElementById("item6").textContent = otp[5];
}

document.getElementById("btn").addEventListener("click", calOtp);

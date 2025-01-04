const button = document.getElementById("btn");
const resultDiv = document.getElementById("result");

let newelem = document.createElement("p");
resultDiv.appendChild(newelem);

function getTime() {
  let timenow = new Date();
  let updatedTime = timenow.toLocaleTimeString();
  newelem.innerHTML = `Time : ${updatedTime}`;
}

button.addEventListener("click", function () {
  button.classList.add("hidden");
  getTime();
  setInterval(getTime, 1000);
});

// timenow.setHours(1);
// timenow.setMinutes(0);
// timenow.setSeconds(0);

// console.log(timenow.toString());

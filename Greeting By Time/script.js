const morHour = 6;
const aftHour = 12;
const eveHour = 18;
const nigHour = 23;

function showDate() {
  const timenow = new Date();
  const currentHour = timenow.getHours();

  if (currentHour >= morHour && currentHour < aftHour) {
    document.getElementById("para").innerHTML = "Hello! Good Morning";
  } else if (currentHour >= aftHour && currentHour < eveHour) {
    document.getElementById("para").innerHTML = "Hello! Good Afternoon";
  } else if (currentHour >= eveHour && currentHour <= nigHour) {
    document.getElementById("para").innerHTML = "Hello! Good Evening";
  } else {
    document.getElementById("para").innerHTML = "Hello! Good Night";
  }
}

const btnvar = document.getElementById("btnclk");
btnvar.addEventListener("click", function () {
  btnvar.classList.add("hidden");
  setInterval(showDate, 100);
});

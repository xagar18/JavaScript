function clearColours() {
  document.body.classList.remove(
    "colourred",
    "colourgreen",
    "colourblue",
    "colouryellow",
    "colourpurple",
    "colourorange"
  );
}


document.getElementById("red").addEventListener("click", function () {
  clearColours();
  document.body.classList.add("colourred");
});

document.getElementById("green").addEventListener("click", function () {
  clearColours();
  document.body.classList.add("colourgreen");
});

document.getElementById("blue").addEventListener("click", function () {
  clearColours();
  document.body.classList.add("colourblue");
});

document.getElementById("yellow").addEventListener("click", function () {
  clearColours();
  document.body.classList.add("colouryellow");
});

document.getElementById("purple").addEventListener("click", function () {
  clearColours();
  document.body.classList.add("colourpurple");
});

document.getElementById("orange").addEventListener("click", function () {
  clearColours();
  document.body.classList.add("colourorange");
});

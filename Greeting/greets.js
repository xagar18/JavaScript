document.getElementById("btn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const getResult = document.getElementById("result");
  getResult.innerText = `Hello ${name} ! Your Age is ${age}`;
});

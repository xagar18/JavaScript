// im creating a counter which count 30 to 0

// function counter() {
//   for (i = 30; i > 0; i--) {
//     console.log(i);
//   }
// }
// counter()

function realres() {
  j = 30
setInterval(realCounter, 1000);
}

function realCounter() {
  console.log(j);
  j--;
}
realres(); 
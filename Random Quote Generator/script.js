const quotesarr = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
];

document.getElementById("btn").addEventListener("click", function () {
  showQuote();
});
function showQuote() {
  let randomPicker = Math.floor(Math.random() * quotesarr.length);
  console.log(randomPicker);
  document.getElementById("result").innerHTML = quotesarr[randomPicker];
}

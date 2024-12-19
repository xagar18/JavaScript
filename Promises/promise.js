function fetchData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        res("Data fetched successfully");
      } else {
        rej("Error while fetching data");
      }
    }, 3000);
  });
}
fetchData()
  .then((a) => console.log(a)) // here we can return and next line, we can get by using then same method
  .catch((b) => console.log(b));

const val = "sagar yadav";
let res = val.substr(1, 6); //agar y
let res1 = val.slice(1, 6); //agar

//console.log(res)
//console.log(res1)

// slice by using for loop custom function
function cut(sr, startIndex, endIndex) {
  let newst = "";
  for (let i = 0; i < structuredClone.length; i++) {
    if (i >= startIndex && i < endIndex) {
      newst += sr[i];
    }
  }
  return newst;
}
const val2 = "sagar yadav";
let res3 = cut(val, 1, 6);
//console.log(res3) //agar
"sagar yadav".slice(1, 6); //agar

// string replace
const repstr = "sagar yadav";
//console.log(repstr.replace("sagar", "sagar Kumar"));

//console.log(repstr.replace("xyz", "sagar Kumar")); // sagar yadav as xyz is not present in the string

// split method
const newval = "sagar yadav sagar";
const words = newval.split(" "); // ["sagar", "yadav", "sagar"]
//console.log(words)

const newval1 = "sagar,yadav,sagar";
const words1 = newval1.split(","); // ["sagar", "yadav", "sagar"]
//console.log(words1);

//trim method
const newval2 = "    sagar yadav   ";
const newval3 = newval2.trim();
console.log(newval3);

// string to array
const newval4 = "sagar yadav";
const newval5 = newval4.split("");
console.log(newval5); // ["s", "a", "g", "a", "r", " ", "y", "a", "d", "a", "v"]



console.log("test");

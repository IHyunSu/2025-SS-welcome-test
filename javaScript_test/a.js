let a = (arr) => {
    let temp = String(arr);
    let result = temp.split("").reverse().join("");
    console.log(Number(result));
}


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
    a(input);
    rl.close();
});
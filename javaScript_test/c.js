let c = (age, heigth) => {
    if ((age >= 14) || (height >= 155)) {
        console.log("X");
    } else {
        console.log("O");
    }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
    const [age, height] = input.split(" ").map(Number);
    c(age, height);
    rl.close();
});
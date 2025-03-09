let d = (n) => {
    let sum = 0;
    if (n < 1) {
        console.log("X");
    } else {
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        console.log(sum);
    }
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (input) => {
    const n = Number(input);
    d(n);
    rl.close();
});
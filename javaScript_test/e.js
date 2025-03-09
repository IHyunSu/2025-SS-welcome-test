let e = (year, month) => {
    if (month === 4 || month === 6 || month === 9 || month === 11) {
        console.long("30");
    } else if (month === 2) {
        if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
            console.log("29");
        } else {
            console.log("28");
        }
    } else {
        console.log("31");
    }
}

const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.on("line", (input) => {
    const [year, month] = input.split(" ").map(Number);
    e(year, month);
    rl.close();
});
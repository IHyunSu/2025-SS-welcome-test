let h1 = (a, b, c) => {
    const check = [a, b, c];
    const alpha = ["A", "B", "C"];

    let arr = [a, b, c];
    arr.sort((a,b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        let k = 0;
        for (let j = 0; j < check.length; j++) {
            if (arr[i] === check[j]) {
                k = j;
            }
        }
        setTimeout(() => {
            console.log(alpha[k] + " 마킹");
        }, arr[i] * 1000);
    }
    setTimeout(() => {
        console.log("시험이 종료되었습니다.");
    }, arr[2] * 1000);
}

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.on ("line", (input) => {
    const [a, b, c] = input.split(" ").map(Number);
    h1(a, b, c);
    rl.close();
});
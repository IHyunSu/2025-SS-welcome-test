let f = (input) => {
    let N = Number(input);
    for (var i = 1; i < N; i++) {
        let space = "";
        let star = "";
        for (var j = N - i + 1; j > 0; j--) {
            space = space + " ";
        }
        for (var k = 1; k < i * 2; k++) {
            star = star + "*";
        }
        console.log(space + star);
    }

    for (var i = N; i > 0; i--) {
        let space = "";
        let star = "";
        for (var j = N - i + 1; j > 0; j--) {
            space += " ";
        }
        for (var k = (i * 2) - 1; k > 0; k--) {
            star += "*";
        }
        console.log(space + star);
    }
}

const { stdin } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.on ("line", (input) => {
    f(Number(input));
    rl.close();
})
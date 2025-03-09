let b = (arr) => {
    let input = arr.split("");
    let cnt = 0;
    let check = ["a", "e", "i", "o", "u"];

    for (char of input) {
        if (check.includes(char)) {
            cnt++;
        }
    }

    if (cnt >= 1) {
        console.log("O");
    } else {
        console.log("X");
    }
}
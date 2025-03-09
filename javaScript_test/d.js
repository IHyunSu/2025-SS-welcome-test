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
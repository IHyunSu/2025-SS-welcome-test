let a = (arr) => {
    let temp = String(arr);
    let result = temp.split("").reverse().join("");
    console.log(Number(result));
}

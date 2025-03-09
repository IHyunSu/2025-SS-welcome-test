let check = (a, b, c) => {
    let arr = [a, b, c];

    let result = [], i = 0;
    for (num of arr) {
        if (num !== undefined) {
            result[i] = num;
            i++;
        }
    }

    let check = 0;
    for (num of result) {
        if (num <= 0) {
            check = 1;
        }
    }

    if ((result.length !== 3) || (check === 1)) {
        console.log("잘못된 입력입니다. 0보다 큰 숫자 세 개를 입력하세요.");
        return -1;
    }
}

let h2 = (a, b, c) => {
    let h = check(a, b, c);
    if (h === -1) {
        return;
    }

    let arr = [a, b, c];
    arr.sort((a, b) => a - b);

    let cntA = 1, idA;
    let cntB = 1, idB;
    let cntC = 1, idC;
    
    idA = setInterval(() => {
        console.log("(%d초 후) A 작업 진행 중... (%d초 경과)", cntA, cntA);
        cntA++;
    }, 1 * 1000);

    idB = setInterval(() => {
        console.log("(%d초 후) B 작업 진행 중... (%d초 경과)", cntB, cntB);
        cntB++;
    }, 1 * 1000);

    idC = setInterval(() => {
        console.log("(%d초 후) C 작업 진행 중... (%d초 경과)", cntC, cntC);
        cntC++;
    }, 1 * 1000);

    setTimeout(() => { 
        console.log("(%d초 후) A 작업 완료!", cntA);
        clearInterval(idA);
    }, a * 1000);

    setTimeout(() => { 
        console.log("(%d초 후) B 작업 완료!", cntB);
        clearInterval(idB);
    }, b * 1000);

    setTimeout(() => { 
        console.log("(%d초 후) C 작업 완료!", cntC);
        clearInterval(idC);
    }, c * 1000);

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let day = ('0' + today.getDate()).slice(-2);
    let hours = ('0' + today.getHours()).slice(-2);
    let minutes = ('0' + today.getMinutes()).slice(-2);
    let seconds = ('0' + today.getSeconds()).slice(-2);

    let am_pm = "";

    if (hours >= 12) {
        am_pm = "오후";
    } else {
        am_pm = "오전";
    }
    
    setTimeout(() => {
        console.log("(%d초 후) 프로젝트 배포 완료! (완료 시각: %d.%d.%d. %s %d:%d:%d)", 
            arr[2], year, month, day, am_pm, hours, minutes, seconds)
    }, arr[2] * 1000);
}

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.on("line", (input) => {
    const [a, b, c] = input.split(" ").map(Number);
    h2(a, b, c);
    rl.close();
})
// worker.js

// 定義一個計時器
let timer = 0;

// 每秒增加計時器的值
function startTimer() {
    setInterval(() => {
        timer++;
        postMessage(timer); // 將計時器的值發送給主線程
    }, 1000);
}

startTimer(); // 啟動計時器

function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return 'Invalid Input';
    }

    let totalTime = 0;
    for(const time of waitingTimes){
        totalTime += time;
    }
    
    const avgTime = Math.round(totalTime / waitingTimes.length);
    const waitingTime = serialNumber - 1 - waitingTimes.length;

    return waitingTime * avgTime;
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7 , 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));



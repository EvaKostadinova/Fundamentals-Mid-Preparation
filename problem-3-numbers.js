function numbers(str) {
    let strNumbers = str.split(' ');
    let numArr = [];
    let sum = 0;

    for(let el of strNumbers){
        let currentNum = Number(el);
        sum += currentNum;
        numArr.push(currentNum);
    }

    let avg = sum / numArr.length;
    let topFive = [];

    for(let el of numArr){
        if(el > avg){
            topFive.push(el);
        }
    }

    if(topFive.length === 0){
        console.log("No");
    } else {
        topFive.sort((a,b) => b - a);
        let top = topFive.splice(0, 5);
        console.log(top.join(' '));
    }

}

numbers('10 20 30 40 50');
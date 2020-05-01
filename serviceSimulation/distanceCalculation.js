module.exports.randomNumber = function() {
    let num = (Math.random() * 10).toFixed(2);
    if(num > 0 & num < 8) {
        return num;
    } else {
        let newNum = num * (Math.random() * 10).toFixed(2);
        console.log("newNum: " + newNum);

        if(newNum > 20 & newNum < 28) {
            newNum = newNum / (Math.random() * 10);
            console.log("newNum: " + newNum + " more 20km");
            return newNum;
        }  else if(newNum > 28) {
            newNum = (newNum / 2) / (Math.random() * 10);
            console.log("newNum: " + newNum + " more 28km");
            return newNum;
        } else {
            return newNum;
        }
    }
}



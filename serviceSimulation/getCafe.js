let cafeList = [
    "001",
    "002",
    "003",
    "004",
    "005",
    "006",
    "007",
    "008",
    "009",
    "010",
    "011",
    "012",
];
let random = Math.floor(Math.random() * 10);

module.exports.setCafe = function() {
    for(let i = 0; i < cafeList.length; i++) {
        if(i == random)
        // console.log("index " + cafeList[i]);
    }
}

// setCafe();
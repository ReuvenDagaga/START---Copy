var numList = [1, 2, 3, 4, 5, 6, 7];
function sumOfList(numList) {
    var sum = 0;
    for (var i = 0; i < numList.length; i++) {
        sum += numList[i];
    }
    return sum;
}
console.log(sumOfList(numList));

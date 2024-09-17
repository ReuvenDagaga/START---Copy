const numList: number[] = [1,2,3,4,5,6,7]

function sumOfList(numList: number[]) : number {
    let sum: number = 0;
    for (let i = 0; i < numList.length; i++) {
        sum += numList[i]
    }
    return sum
}

console.log(sumOfList(numList));

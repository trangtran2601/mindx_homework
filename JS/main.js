// var a= 10;
// var b = Number(a);
// var c = a * 1;

// console.log(a)
// console.log(b);
// console.log(c)

// let count = 0;
// let sum = 0;

// for (let i = 1; i <= 15; i++ ){
//     if (15 % i === 0){
//         count = count + 1
//         sum = sum + i
//     }
// }

// console.log("Số ước",count)
// console.log("Tổng các ước", sum)


function electronicSum(oldIndex, newIndex){
    let sum
    let gap = newIndex - oldIndex;
    if (gap > 0){
        if (gap <= 50){
            sum = gap * 1243
        } else if (gap <= 100){
            sum = 50 * 1234 + (gap - 50) * 1304
        } else if (gap <= 150) {
            sum = 50 * (1234 + 1304) + (gap -100) * 1644
        } else if (gap <= 200) {
            sum = 50 * (1234 + 1304 + 1644) + (gap -150) * 1806
        } else if (gap <= 250) {
            sum = 50 * (1234 + 1304 + 1644 + 1806) + (gap -200) * 1976
        } else {
            sum = 50 * (1234 + 1304 + 1644 + 1806 + 1976) + (gap -250) * 2297
        }
    }
    return sum
}


console.log(electronicSum(2001, 3045))



function problemtOneInput(array){
    let count = 0
    for (let index in array){
        if (array[index]  % 2 === 0 ) {
            count += 1
        }
    }
    return count
}

console.log(problemtOneInput([-10, 20, 5, 6, 7, 9, 11, 12, 0, 1, 100]))


function problemtTwoInput(array){
    let sum = 0
    for (let index in array){
        if (array[index]  % 2 === 0 && array[index] < 0) {
            sum += array[index]
        }
    }
    return sum
}

console.log(problemtTwoInput([-100, 31, 12, -6, 28, -5, -12, -16, -38, 1, 2, 5]))

function outlierNumber(array){
    let evenArray = []
    let oddArray = []
    for ( index in array){
        if(array[index] % 2 === 0){
            evenArray.push(array[index])
        } else if (array[index] % 2 ===1){
            oddArray.push(oddArray[index])
        }
    }

    if (evenArray.length === 1){
        return evenArray[0]
    } else if (oddArray.length === 1) {
        return oddArray[0]
    } else {
        return "There is no outliner number"
    }
}




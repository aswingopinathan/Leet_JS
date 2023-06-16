
// var generate = function(numRows) {
//     let mainArr = [[1]];
//     for(let i=1; i<numRows; i++){
//         let newArr = [1]
//         for(let j=1; j<i; j++){
//             newArr.push(mainArr[i-1][j]+mainArr[i-1][j-1])
//         }
//         newArr.push(1)
//         mainArr.push(newArr)
//     }
//     return mainArr
// };
// console.log(generate(5));

var getRow = function(rowIndex) {
    const outputArr = [];
    while(outputArr.length <= rowIndex){
        outputArr.unshift(1);
        for(let i=1; i<outputArr.length-1; i++){
            outputArr[i] += outputArr[i+1]
        }
    }
    return outputArr
};

console.log(getRow(5));
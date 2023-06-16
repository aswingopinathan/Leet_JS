// var plusOne = function(digits) {
//     let initial = digits.join('')
//     initial = BigInt(initial)+1n
//     initial = initial.toString()
//     let newArr = []
//     for(let i=0;i<initial.length; i++){
//         newArr.push(parseInt(initial[i]))
//     }
//     return newArr
// };
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));

var plusOne = function(digits) {
   
  for(var i = digits.length - 1; i >= 0; i--){
    if(++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  digits.unshift(1);
  return digits;
};
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));

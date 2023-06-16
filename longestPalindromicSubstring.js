var longestPalindrome = function(s) {
    let k = 0;
    let myArr = [];
    let maxLength = 0;
    for(let i=0; i<s.length; i++){
        for(let j=k; j<i; j++){
            if(s[i]===s[j]){
                k=j+1
                break;
            }
        }
        if(i - k + 1 > maxLength){
            myArr.push(s[i])
        }
    }
};
// not complete
console.log(longestPalindrome("babad"));
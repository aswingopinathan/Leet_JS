var isPalindrome = function(s) {
    let k = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let rev = k.split("").reverse().join("")
    if(k === rev) return true
    return false
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
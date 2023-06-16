var strStr = function(haystack, needle) {
    if(haystack.includes(needle)){
       return haystack.indexOf(needle)
    }else{
        return -1
    }
};

console.log(strStr("mississippi","issip"));
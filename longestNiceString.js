var longestNiceSubstring = function(s) {
    let nice =[];
    for(let i=0; i<s.length; i++){
        if(s[i+1] === s[i].toUpperCase()){
                nice.push(s[i]+s[i+1])
                if(s[i] === s[i+2]){
                    nice.push(s[i])
                     return nice.join('')
                }
        }else if(s[i+1] === s[i].toLowerCase()){
                nice.push(s[i]+s[i+1])
                if(s[i] === s[i+2]){
                    nice.push(s[i])
                }
            }
        }
    return nice.join('')
};

console.log(longestNiceSubstring("dDzeE"));
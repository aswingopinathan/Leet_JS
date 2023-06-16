var groupAnagrams = function(strs) {
    let mapping={}
    for(let str of strs){
        let s=str.split("").sort().join("")
        if(!mapping[s]) mapping[s]=[]
        mapping[s].push(str)
    }
    return Object.values(mapping)
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
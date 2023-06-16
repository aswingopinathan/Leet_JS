var containsDuplicate = function(nums) {
    let newArr = [...new Set(nums)]
    if(nums.length === newArr.length){
        return false;
    }else{
        return true;
    }
};

console.log(containsDuplicate("abcabcbb"));
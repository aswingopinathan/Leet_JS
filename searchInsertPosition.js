var searchInsert = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(target === nums[i]){
            return i
        }else if(target > nums[i] && target < nums[i+1]){
            // nums.splice(i,0,target)
            return i+1
        }else if(target > nums[nums.length-1]){
            nums.push(target)
            return nums.length-1
        }else if(target < nums[0]){
            nums.unshift(target)
            return 0
        }
    }
};

console.log(searchInsert([1,3,5,6],2));
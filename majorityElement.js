var majorityElement = function(nums) {
   let val=nums.length/2;
   let count = 1;
   nums.sort()
   for(let i=0; i<nums.length; i++){
    if(nums[i]===nums[i+1]){
        count++
    }else if(count>val){
        return nums[i]
    }else{
        count = 1;
    }
   }
};

console.log(majorityElement([2,2,1,1,1,2,2]));
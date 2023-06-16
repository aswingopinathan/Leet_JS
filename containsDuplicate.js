var containsNearbyDuplicate = function(nums, k) {
    var temp = {};
for (var i = 0; i < nums.length; i++) {
  if (temp[nums[i]] >= 0 && i - temp[nums[i]] <= k) return true;
  temp[nums[i]] = i;
}
return false;
};

console.log(containsNearbyDuplicate([1,2,3,1],3));
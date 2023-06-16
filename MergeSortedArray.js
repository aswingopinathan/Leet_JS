var merge = function (nums1, m, nums2, n) {
    let num1 = nums1.slice(0,m);
    let newConcatArray = num1.concat(nums2)
    let newA = newConcatArray.sort(function(a, b) {
        return a - b;
    })
    nums1.splice(0,m+n,...newA)
    return nums1;  
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

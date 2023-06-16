var findMaxAverage = function(nums, k) {
    // let newArr = [];
    // while(nums.length >= k){
    //     let k1 = nums.slice(0,k)
    //     let avg = 0;
    //     for(let i=0; i<k1.length; i++){
    //          avg = avg + k1[i]
    //     }
    //     avg = avg/k
    //     newArr.push(avg)
    //     nums.shift()
    // }
    // let maxAvg = Math.max(...newArr)
    // return maxAvg
    let index = 0;
    let sum = 0;

    while (index < k) {
        sum += nums[index];
        index++;
    }

    let maxAvg = sum / k;

    while (index < nums.length) {
        sum = sum + nums[index] - nums[index - k];
        maxAvg = Math.max(maxAvg, sum / k);
        index++;
    }

    return maxAvg;
};


console.log(findMaxAverage([1,12,-5,-6,50,3],  4));
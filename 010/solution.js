
var findMaxAverage = function(nums, k) {
    if (k > nums.length) return 0;
    let currentSum = 0;
    for(let i = 0; i < k; i++){
        currentSum += nums[i];
    }
    let maxSum = currentSum;
    for(let i = k;
    i < nums.length;i++){
        currentSum -= nums[i - k];
        currentSum += nums[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum / k
};



var pivotIndex = function(nums) {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    let leftSum  = 0;
    for(let i = 0; i <  nums.length; i++){
        const rightSum  = totalSum - nums[i] - leftSum;
        if(leftSum === rightSum){
            return i;
        }
        leftSum += nums[i];
    }
    return -1
};

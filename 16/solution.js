
var longestOnes = function(nums, k) {
    let left = 0;
    let zeroCount = 0;
    let maxLength = 0;
    
    // Expand window by moving right pointer
    for (let right = 0; right < nums.length; right++) {
        // If we encounter a 0, increment zeroCount
        if (nums[right] === 0) {
            zeroCount++;
        }
        
        // If zeroCount exceeds k, shrink window from left
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }
        
        // Update maxLength with current window size
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};

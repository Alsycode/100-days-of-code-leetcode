
function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n);

  // Step 1: Calculate left products and store in answer
  answer[0] = 1; // No elements to the left of index 0
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  // Step 2: Calculate right products and combine with left products
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] = answer[i] * rightProduct;
    rightProduct *= nums[i];
  }

  return answer;
}

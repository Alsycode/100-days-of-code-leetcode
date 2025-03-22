
const stringreverse = (s) => {
    const chars = s.split('');
// Create a Set of vowels (both lowercase and uppercase) for O(1) lookup
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
// Initialize two pointers: left starts at beginning, right at end
    let left = 0;
    let right = chars.length - 1;
    // Continue until pointers meet or cross
    while(right > left) {
// Move left pointer until we find a vowel or pointers meet
        while(left < right && !vowels.has(chars[left])) {
            left++;
        }
// Move right pointer until we find a vowel or pointers meet
        while(left < right && !vowels.has(chars[right])) {
            right--;  
        }
// Swap the vowels found at left and right positions
        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;  
    }
    // Join the characters back into a string and return
    return chars.join("");  // Should return "AceCreIm" for "Icecream"
}

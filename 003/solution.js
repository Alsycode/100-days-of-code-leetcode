
function reverseWords(s) {
    // Step 1: Trim leading/trailing spaces and split by spaces
    const wordsArray = s.trim().split(/\s+/);
    
    // Step 2: Reverse the array of words  Join the words with a single space
 return wordsArray.reverse().join(" ");
}

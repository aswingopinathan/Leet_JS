// var lengthOfLongestSubstring = function(s) {
//     var k = 0;
//     var maxLength = 0;
//     for(i = 0; i < s.length; i++) {
//         for (j = k; j < i; j++) {
//             if (s[i] === s[j]) {
//                 k = j + 1;
//                 break;
//             }
//         }
//         if (i - k + 1 > maxLength) {
//             maxLength = i - k + 1;
//         }
//     }
//     return maxLength;
// };

var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let l = 0;
    let max = 0;

    for (let r = 0; r < s.length; r++) {
        while (set.has(s.charAt(r))) {
            set.delete(s.charAt(l));
            l++;
        }
        set.add(s.charAt(r));
        max = Math.max(max, set.size);
    }

    return max;
};

console.log(lengthOfLongestSubstring("bbabcdabcbb"));
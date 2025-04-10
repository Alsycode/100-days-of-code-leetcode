
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const onlyInSet1 = [...set1].filter((item)=>!set2.has(item));
    const onlyInSet2 = [...set2].filter((item)=>!set1.has(item));
    return [onlyInSet1, onlyInSet2];
};

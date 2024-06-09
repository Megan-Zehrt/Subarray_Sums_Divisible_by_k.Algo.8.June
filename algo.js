// 974. Subarray Sums Divisibly by K

// Given an iteger array "nums" and an integer "k", return the number of non-empty subarrays that have a sum divisible by k.

// A subarray is a contiguous part of an array



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let prefixSum = 0;
    let remainderCount = new Map();
    remainderCount.set(0, 1); // Initialize with remainder 0 to handle full prefix sums
    let result = 0;

    for (let num of nums) {
        prefixSum += num;
        let remainder = prefixSum % k;
        
        // Adjust for negative remainders
        if (remainder < 0) remainder += k;

        if (remainderCount.has(remainder)) {
            result += remainderCount.get(remainder);
        }

        remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1);
    }

    return result;
};

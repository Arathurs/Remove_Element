/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    
    // Iterate through the array using a 
    // reverse for loop
    for (let i = nums.length - 1; i >= 0; i--) {
        
        // If nums[i] is equal to val, remove
        // nums[i] from the nums array in-place,
        // using the splice function
        if(nums[i] === val) nums.splice(i, 1);
    }
    
    // Return final length
    return nums.length;
};
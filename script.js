
let nums = [3,2,2,3]
let val = 3
var removeElement = function(nums, val) {
  nums = nums.filter(item=>item!=val)
  return nums
 };

 console.log(removeElement(nums, val))

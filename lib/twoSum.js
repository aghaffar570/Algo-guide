
/**
 * @param {number[]} numsArr
 * @param {number} target
 * @return {number[]}
 */

// Question #1
// solution # 1: O(n) time | O(n) space
const twoSum = (numsArr, target) => {
  const numberByIdx = {};

  for(let i = 0; i < numsArr.length; i++) {
    let complement = target - numsArr[i];
    if(numberByIdx.hasOwnProperty(complement)) {
      return [complement, numsArr[i]];
    }
    numberByIdx[numsArr[i]] = i;
  }
  return [];
}



// solution # 2: O(n log n) time | O(1) space
const twoSum = (numsArr, target) => {
  numsArr.sort((a, b) => a - b);
  let i = 0, j = numsArr.length - 1, sum;

  while(i < j) {
    sum = numsArr[i] + numsArr[j];
    if(sum === target) return [numsArr[i], numsArr[j]];
    else if (sum > target) j--;
    else if (sum < target) i++;
  }
  return []
}



// solution # 3: O(n^2) time | O(1) space
const twoSum = (numsArr, target) => {
  for (let i = 0; i < numsArr.length - 1; i++) {
    for (let j = i + 1; j < numsArr.length; j++) {
      if(numsArr[i] + numsArr[j] === target) {
        return [numsArr[i], numsArr[j]];
      }
    }
  }
  return [];
}

// vendor/module-77622.js — webpack module 77622
// params: (e, t) = (module, exports, require)
"use strict";
(t.codingFillers = void 0),
  (t.codingFillers = {
    concise: {
      simple: {
        question: "Two Sum",
        answer:
          "Well, I'd solve this efficiently by using a hash map, you know? As we loop through the numbers, we can store each value and its index, checking if the difference we need is already there, right?",
        keySteps:
          "- Loop through the numbers in the array.\n- Calculate the difference between the target and the current number.\n- Check if that difference is already in our hash map.\n- If it is, return its index and the current index, honestly.",
        code: {
          language: "python",
          source:
            "def twoSum(nums, target):\n    # Store numbers and their indices\n    seen = {}\n    for i, num in enumerate(nums):\n        diff = target - num\n        if diff in seen:\n            return [seen[diff], i]\n        seen[num] = i\n    return []",
        },
        explanation:
          "This approach uses a hash map to track numbers we have already visited. It lets us find the required complement in constant time on average, giving us an overall time complexity of O of n and a space complexity of O of n as well.",
        diagram: null,
      },
      formal: {
        question: "Two Sum",
        answer:
          "Well, I'd solve this efficiently by using a hash map to store each number and its index as I iterate through the array, you know? So, for every element, I just check if its complement already exists in the map, which lets us find the solution in linear time, right?",
        keySteps:
          "- Initialize an empty hash map to store numbers and their indices.\n- Iterate through the array and calculate the complement for each element.\n- Check if the complement exists in the map and return the indices if found.",
        code: {
          language: "python",
          source:
            "def twoSum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []",
        },
        explanation:
          "We use a hash map to keep track of the numbers we've visited so far and their indices. This allows us to check for the complement in O(1) time, bringing the overall time complexity to O(n) with O(n) space complexity.",
        diagram: null,
      },
    },
    balanced: {
      simple: {
        question: "Two Sum",
        answer:
          "Well, so, to solve this efficiently, I'd use a hash map to keep track of the numbers we've already seen and their indices as we go through the array, right? I mean, instead of checking every single pair with a nested loop which would take too long, we can just look up the difference between the target and the current number in our map in constant time. So, for every number, we find its complement, check if it's already in the map, and if it is, we're done and can return those indices, you know?",
        keySteps:
          "- Loop through the array once and examine each number\n- Calculate the difference between the target and the current number\n- Check if this difference is already stored in our hash map\n- If it is, return its index and the current index\n- If not, add the current number and its index to the hash map",
        code: {
          language: "python",
          source:
            "def twoSum(nums, target):\n    # Dictionary to store numbers and their indices\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        # Check if complement exists in our dictionary\n        if complement in seen:\n            return [seen[complement], i]\n        # Otherwise, add current number and index to dictionary\n        seen[num] = i\n    return []",
        },
        explanation:
          "We can solve this efficiently by using a hash map to store each number and its index as we iterate through the list. This lets us check for the required complement in constant time. The time complexity is O of n because we only traverse the array once, and the space complexity is O of n to store the elements in the hash map.",
        diagram: null,
      },
      formal: {
        question: "Two Sum",
        answer:
          "Well, we can solve this efficiently by using a hash map to keep track of the numbers we've already seen and their indices as we iterate through the array. So, for each element, we just check if its complement, which is the target minus the current number, is already in our map, you know? If it is, we've found our pair and can immediately return their indices. Otherwise, we simply store the current number and its index in the map and move on, right?",
        keySteps:
          "- Initialize an empty hash map to store numbers and their indices.\n- Iterate through the array from left to right.\n- Calculate the complement for each element by subtracting it from the target.\n- Check if the complement exists in the hash map.\n- Return the indices of the complement and the current element if found, otherwise add the current element to the map.",
        code: {
          language: "python",
          source:
            "def twoSum(nums, target):\n    # Map to store the value and its corresponding index\n    seen = {}\n    \n    for i, num in enumerate(nums):\n        complement = target - num\n        \n        # Check if complement already exists in our map\n        if complement in seen:\n            return [seen[complement], i]\n            \n        # Otherwise, add the current number and its index to the map\n        seen[num] = i\n        \n    return []",
        },
        explanation:
          "This approach uses a hash map to achieve a single-pass solution. As we iterate through the array, we check if the complement of the current number is already in the map in O(1) time. The overall time complexity is O(n) because we traverse the list containing n elements only once, and the space complexity is O(n) to store the elements in the hash map.",
        diagram: null,
      },
    },
    detailed: {
      simple: {
        question: "Two Sum",
        answer:
          "Well, the best way to solve this is by using a hash map to keep track of the numbers we've already seen and their positions, right? So, as we walk through the array one time, we can calculate the difference between the target and the current number. If that difference is already sitting in our map, we know we found our pair and we can return its index along with our current index. I mean, if it's not in the map yet, we just add the current number and its index to the map and move on. This lets us solve the problem in a single pass through the data. For example, if our array is two, seven, eleven, fifteen and our target is nine, when we look at seven, we see that nine minus seven is two, which is already in our map from the first step, so we immediately return the indices for two and seven. This is much faster than checking every possible pair with nested loops, you know?",
        keySteps:
          "- Initialize an empty hash map to store numbers and their indices.\n- Loop through the array of integers one by one.\n- Calculate the difference between the target and the current number for each step.\n- Check if this difference already exists in the hash map.\n- Return the stored index of the difference and the current index if found, otherwise add the current number and its index to the map.",
        code: {
          language: "python",
          source:
            "def twoSum(nums, target):\n    # Keep track of numbers and their indices we have visited\n    seen = {}\n    \n    for i, num in enumerate(nums):\n        # Find the difference needed to reach the target\n        diff = target - num\n        \n        # If the difference is in our map, we found the pair\n        if diff in seen:\n            return [seen[diff], i]\n            \n        # Otherwise, add the current number and its index to the map\n        seen[num] = i\n        \n    return []",
        },
        explanation:
          "This approach uses a hash map to store each number and its index as we iterate through the array. By checking for the required complement (target minus current number) in the hash map during each iteration, we can find the solution in a single pass. The time complexity is O of n because we traverse the array of n elements at most once, and hash map lookups take O of 1 time on average. The space complexity is O of n to store up to n elements in the hash map in the worst-case scenario.",
        diagram: null,
      },
      formal: {
        question: "Two Sum",
        answer:
          "Well, I mean, the most efficient way to solve this is by using a hash map to keep track of the numbers we've already seen and their indices as we iterate through the array. So, instead of using a nested loop which would take O(n-squared) time, we can check if the complement of the current number — that's our target minus the current number — is already sitting in our hash map. Actually, if it's there, we instantly have our two indices and can return them right away, right? If it's not, we just store the current number along with its index in the map and move on to the next one. This way, we only make a single pass through the array, which brings our time complexity down to O(n). You know, honestly, it's a classic space-time trade-off because we're using O(n) extra space for the hash map, but it's totally worth it for that linear runtime performance.",
        keySteps:
          "- Initialize an empty hash map to store numbers and their indices.\n- Iterate through the array of integers one by one.\n- Calculate the complement for each element by subtracting it from the target.\n- Check if the complement exists in the hash map.\n- Return the indices if found, otherwise store the current number and its index in the map.",
        code: {
          language: "python",
          source:
            "def twoSum(nums, target):\n    # Map to store the value and its corresponding index\n    seen = {}\n    \n    for i, num in enumerate(nums):\n        complement = target - num\n        # Check if the complement is already in our map\n        if complement in seen:\n            return [seen[complement], i]\n        \n        # Otherwise, add the current number and its index to the map\n        seen[num] = i\n        \n    return []",
        },
        explanation:
          "We use a hash map to store each number and its index as we iterate through the array. For each element, we compute its complement relative to the target and check if it exists in the hash map in O(1) average time. This reduces the overall time complexity to O(n) with a space complexity of O(n) to store the hash map.",
        diagram: null,
      },
    },
  });

// vendor/module-41917.js — webpack module 41917
// params: (e, t) = (module, exports, require)
"use strict";
(t.coding = void 0),
  (t.coding = {
    bullets: {
      concise: {
        simple: {
          question: "Two Sum",
          answer:
            "- Use hash map for one pass lookup\n- Store number and index during iteration\n- Time and space complexity both linear",
          keySteps:
            "- Loop through each number in the array\n- Calculate the needed number to reach the target\n- Check if the needed number is already in our map\n- Return current index and map index if found\n- Save current number and index to the map otherwise",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    # map to store number and its index\n    seen = {}\n    for i, num in enumerate(nums):\n        # find the difference needed to reach target\n        diff = target - num\n        if diff in seen:\n            return [seen[diff], i]\n        # store current number and index\n        seen[num] = i\n    return []",
          },
          explanation:
            "- Time complexity is big O of n because we visit each number once\n- Space complexity is big O of n to store numbers in the hash map",
          diagram: null,
        },
        formal: {
          question: "Two Sum",
          answer:
            "- Use hash map for O(n) time complexity\n- Store each number and its index during iteration\n- Check if target minus current number exists in map",
          keySteps:
            "- Initialize an empty hash map to store values and their indices.\n- Iterate through the array once.\n- Calculate the complement for each element by subtracting it from the target.\n- Check if the complement already exists in the hash map.\n- Return the indices if found, otherwise store the current number and index in the map.",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []",
          },
          explanation:
            "- Time complexity is O(n) because we traverse the list containing n elements only once and hash map lookups take O(1) average time.\n- Space complexity is O(n) to store up to n elements in the hash map in the worst-case scenario.",
          diagram: null,
        },
      },
      balanced: {
        simple: {
          question: "Two Sum",
          answer:
            "- Use hash map for one pass lookup\n- Store each number and its index during loop\n- Check if target minus current number exists in map\n- Return stored index and current index if found",
          keySteps:
            "- Create empty hash map for number to index mapping\n- Loop through array from start to end\n- Calculate difference between target and current number\n- Return indices if difference is already in map\n- Add current number and index to map otherwise",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    # map to store number and its index\n    seen = {}\n    for i, num in enumerate(nums):\n        # find the needed value to reach target\n        diff = target - num\n        if diff in seen:\n            return [seen[diff], i]\n        # store current number and index\n        seen[num] = i\n    return []",
          },
          explanation:
            "- Time complexity is linear, O of n, because we visit each element once and hash map lookups take constant time on average.\n- Space complexity is linear, O of n, to store up to n elements in the hash map.\n- We avoid the slower O of n squared nested loop approach by trading space for speed.",
          diagram: null,
        },
        formal: {
          question: "Two Sum",
          answer:
            "- Two-pass hash map approach initially\n- Optimized single-pass hash map approach\n- Track seen values and complement indices\n- Time complexity O of n\n- Space complexity O of n",
          keySteps:
            "- Initialize an empty hash map to store numbers and their indices\n- Iterate through the array computing the complement for each element\n- Check if the complement already exists in the hash map\n- Return the stored index and current index if found\n- Store the current number and its index in the map otherwise",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    # Map to store number to its index\n    seen = {}\n    \n    for i, num in enumerate(nums):\n        complement = target - num\n        \n        # Check if complement exists in our map\n        if complement in seen:\n            return [seen[complement], i]\n            \n        # Add current number and index to map\n        seen[num] = i\n        \n    return []",
          },
          explanation:
            "- Time complexity is O of n since we traverse the list containing n elements only once and hash map lookups take O of 1 time.\n- Space complexity is O of n because the hash map stores at most n elements in the worst-case scenario.",
          diagram: null,
        },
      },
      detailed: {
        simple: {
          question:
            "How do you efficiently find two array indices whose values add up to a target?",
          answer:
            "- Two Sum solved in one pass with a hash map storing each value’s index\n- For each number, complement equals target minus current value\n- Existing complement means immediate answer with both indices\n- Missing complement means current value enters the map\n- Hash map prevents checking every pair\n- Example: [2, 7, 11, 15], target 9 returns [0, 1]\n- At index zero, complement seven is not present; store two\n- At index one, complement two is present; return zero and one\n- Time complexity: O(n), with one array pass\n- Space complexity: O(n), for stored values and indices\n- Duplicate values work because lookup happens before insertion\n- Assumption: exactly one valid pair exists; otherwise return an empty result",
          keySteps:
            "- Create an empty hash map from value to index\n- Scan the array from left to right\n- Compute complement as target minus current value\n- Return stored complement index and current index when found\n- Store current value and index when complement is absent\n- Return an empty result if no pair exists",
          code: {
            language: "Python",
            source:
              "def two_sum(nums, target):\n    # Store each previously seen value and its index\n    seen = {}\n\n    # Check the needed complement before storing the current value\n    for index, value in enumerate(nums):\n        complement = target - value\n        if complement in seen:\n            return [seen[complement], index]\n\n        seen[value] = index\n\n    # No valid pair exists\n    return []",
          },
          explanation:
            "- A hash map gives average O(1) lookup for each needed complement\n- Checking before insertion handles duplicate values correctly\n- Example: value two stores index zero; value seven finds complement two\n- Returned indices preserve their original array positions\n- Total time complexity: O(n)\n- Total space complexity: O(n)\n- Brute-force comparison would take O(n²) time\n- Sorting could lose original indices unless extra tracking is added",
          diagram: null,
        },
        formal: {
          question: "Two Sum",
          answer:
            "- Hash map tracking seen values and indices\n- Single pass through the array for O(n)\n- Complement calculation against current number\n- Immediate return when complement exists in map\n- Insertion of current number and index otherwise\n- Time complexity O(n) utilizing constant lookups\n- Space complexity O(n) storing map entries",
          keySteps:
            "- Initialize an empty hash map to store numbers and their indices\n- Iterate through the array using a standard loop\n- Calculate the complement by subtracting the current element from the target\n- Check if the complement already exists in the hash map\n- Return the stored index of the complement and the current index if found\n- Store the current element and its index in the map if not found",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []",
          },
          explanation:
            "- Traverse the list containing integers once while storing each value's index.\n- Use a hash map for O(1) average time complexity lookups of the complement.\n- Time complexity is O(n) since each element is visited at most once.\n- Space complexity is O(n) in the worst-case scenario where no pair is found early and all elements are stored in the hash map.",
          diagram: null,
        },
      },
    },
    balanced: {
      concise: {
        simple: {
          question: "Two Sum",
          answer:
            "I can solve this efficiently in one pass using a hash map to store numbers and their indices as I check them.\n- Store each number and its index in a hash map as I loop through the array.\n- Check if the difference between the target and the current number is already in the map.\n- Return the stored index and the current index immediately if a match is found.",
          keySteps:
            "- Initialize an empty hash map to store numbers and their indices.\n- Loop through the array from left to right.\n- Calculate the difference between the target and the current number.\n- Check if that difference exists in the hash map.\n- Return the index from the map and the current index if found, otherwise add the current number and index to the map.",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    # Map to store number values and their indices\n    seen = {}\n    for i, num in enumerate(nums):\n        # Find the number needed to reach the target\n        diff = target - num\n        if diff in seen:\n            return [seen[diff], i]\n        # Store the current number and its index\n        seen[num] = i\n    return []",
          },
          explanation:
            "- I use a hash map for constant time lookups so I do not need a nested loop.\n- Time complexity is O of n because I traverse the array of n elements at most once.\n- Space complexity is O of n to store the elements in the hash map in the worst case.",
          diagram: null,
        },
        formal: {
          question: "Two Sum",
          answer:
            "I can solve this efficiently in one pass using a hash map.\n- Store each number's complement and its index.\n- Return the indices immediately when a complement is found.",
          keySteps:
            "- Initialize an empty hash map to store numbers and their indices.\n- Iterate through the array and calculate the complement for each element.\n- Check if the complement exists in the hash map, returning indices if found.",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []",
          },
          explanation:
            "- Time Complexity: O(n) because we traverse the list containing n elements only once.\n- Space Complexity: O(n) to store the elements and their indices in the hash map.",
          diagram: null,
        },
      },
      balanced: {
        simple: {
          question: "Two Sum",
          answer:
            "I can solve this efficiently by using a hash map to keep track of the numbers and their positions as I look through the list.\n- I walk through the array of numbers one by one.\n- For each number, I figure out what number is missing to reach my target by subtracting the current number from the target.\n- I check if this missing number is already saved in my hash map.\n- If it is saved, I have found my pair and I return its index along with my current index.\n- If it is not saved, I add the current number and its index to the hash map and move to the next number.",
          keySteps:
            "- Create an empty hash map to store numbers and their indices.\n- Loop through each number in the array.\n- Calculate the difference between the target and the current number.\n- Check if the difference exists in the hash map.\n- Return the indices if found, otherwise store the current number and index in the hash map.",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    # Keep track of numbers and their indices\n    seen = {}\n    \n    for i, num in enumerate(nums):\n        # Find the number needed to reach the target\n        diff = target - num\n        \n        # If we saw the needed number before, return its index and current index\n        if diff in seen:\n            return [seen[diff], i]\n            \n        # Otherwise, save the current number and its index\n        seen[num] = i\n        \n    return []",
          },
          explanation:
            "- Time Complexity: O(n) because we go through the list of numbers at most one time and hash map lookups take constant time on average.\n- Space Complexity: O(n) because in the worst case we store every number and its index in our hash map.\n- Dry Run: For `nums = [2, 7, 11, 15]` and `target = 9`, at index 0 the number is 2 and we need 7. 7 is not in the map, so we store `{2: 0}`. At index 1 the number is 7 and we need 2. 2 is in the map at index 0, so we return `[0, 1]`.",
          diagram: null,
        },
        formal: {
          question: "Two Sum",
          answer:
            "I can solve this efficiently in **O(n)** time using a hash map to keep track of the numbers we've seen so far and their indices.\n\n- Iterate through the array and calculate the complement for each number by subtracting it from the target: `target - current_number`.\n- Check if this complement already exists in our hash map.\n- If it does, we've found our two numbers, so I return the index of the complement and the current index.\n- If it doesn't, I store the current number and its index in the hash map and continue.",
          keySteps:
            "- Initialize an empty hash map to store numbers and their indices\n- Loop through the array elements with their indices\n- Compute the complement for the current element\n- Check if the complement is in the hash map\n- Return indices if found, otherwise add current element to hash map",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []",
          },
          explanation:
            "- **Time Complexity**: **O(n)** because we traverse the list containing **n** elements only once, and hash map lookups take **O(1)** time on average.\n- **Space Complexity**: **O(n)** because in the worst-case scenario, we store every element and its index in the hash map before finding the target pair.",
          diagram: null,
        },
      },
      detailed: {
        simple: {
          question: "Two Sum Problem",
          answer:
            "I can solve this efficiently by using a hash map to keep track of the numbers I have already seen and their positions in the array.\n- First, I create an empty hash map to store each number and its index as I go through the array.\n- Next, I loop through the array and find the difference between the target number and the current number for every step.\n- Then, I check if that difference is already inside my hash map.\n- If the difference is in the map, I instantly have my two indices, so I return the stored index and the current index.\n- If it is not there, I add the current number and its index to the map and move to the next step.\n- This approach is much faster than checking every possible pair with a nested loop because it lets me find the answer in a single pass.\n- A quick example: if my array is two, seven, eleven, fifteen and my target is nine, when I am at seven, I look for nine minus seven which is two. Since two is already in my map, I return its index zero along with the current index one.",
          keySteps:
            "- Create a hash map to store numbers and their indices\n- Loop through the array once\n- Calculate the difference between the target and the current number\n- Check if the difference exists in the hash map\n- Return indices if found, otherwise store the current number and index",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    # Store numbers and their indices in a hash map\n    seen = {}\n    \n    for i, num in enumerate(nums):\n        # Find the number needed to reach the target\n        difference = target - num\n        \n        # Check if we have seen the needed number before\n        if difference in seen:\n            return [seen[difference], i]\n            \n        # Add the current number and its index to the map\n        seen[num] = i\n        \n    return []",
          },
          explanation:
            "To solve the two sum problem efficiently, we avoid the slow nested loop approach which takes quadratic time. Instead, we use a hash map to find the complement in constant time on average.\n- Time Complexity: Big O of n, because we only go through the array of n items one time and hash map lookups take constant time.\n- Space Complexity: Big O of n, because in the worst case we store every number from the array inside the hash map.",
          diagram: null,
        },
        formal: {
          question: "Two Sum",
          answer:
            "I can solve this efficiently by using a hash map to keep track of the numbers and their indices as I iterate through the array once.\n- Initialize an empty hash map to store each number's value as the key and its index as the value.\n- Iterate through the array, calculating the complement for each element by subtracting it from the target.\n- Check if the complement already exists in the hash map; if it does, return the indices immediately.\n- If the complement is not found, store the current number and its index in the hash map and continue.\n- This approach reduces the time complexity from quadratic to linear by avoiding nested loops.\n- For example, given the array `[2, 7, 11, 15]` and target `9`, when I reach `7`, I look up `9 - 7 = 2` in the map, find its index `0`, and return `[0, 1]`.",
          keySteps:
            "- Create a hash map for value-to-index lookup\n- Iterate through the array elements once\n- Compute the complement for each element\n- Check map for complement presence\n- Return indices if found, otherwise store current value",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    # Map to store the value and its corresponding index\n    seen = {}\n    \n    for i, num in enumerate(nums):\n        complement = target - num\n        \n        # If complement exists in map, return its index and current index\n        if complement in seen:\n            return [seen[complement], i]\n            \n        # Otherwise, add the current number to the map\n        seen[num] = i\n        \n    return []",
          },
          explanation:
            "- Time Complexity: O(n) because we traverse the list containing n elements only once, and hash map lookups take O(1) time on average.\n- Space Complexity: O(n) because the hash map can store up to n elements in the worst-case scenario where no solution is found early or the match is at the end.\n- Algorithm: We use a single pass hash table lookup to achieve optimal time performance at the cost of extra space for the hash map.",
          diagram: null,
        },
      },
    },
    paragraph: {
      concise: {
        simple: {
          question: "Two Sum",
          answer:
            "I can solve this efficiently by using a hash map to keep track of the numbers I have already seen and their positions. As I look through each number, I check if its matching target pair is already in the map. If it is, I return both indices right away.",
          keySteps:
            "- Loop through the array once while checking the hash map for the required complement.\n- If the complement exists, return its index along with the current index.\n- Otherwise, store the current number and its index in the hash map.",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []",
          },
          explanation:
            "This approach uses a hash map to look up previous numbers in constant time, reducing the total time complexity to order of n. The space complexity is also order of n to store the elements in the hash map.",
          diagram: null,
        },
        formal: {
          question: "Two Sum Efficient Solution",
          answer:
            "I would solve this efficiently using a hash map to store each number and its index as I iterate through the array. For each element, I check if its complement, which is the target minus the current number, already exists in the map. If it does, I immediately return the indices.",
          keySteps:
            "- Initialize an empty hash map to store numbers and their indices.\n- Iterate through the array checking for the complement of the current number.\n- Return the stored index and current index if found, otherwise add the current number to the map.",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []",
          },
          explanation:
            "This approach uses a hash map to achieve a time complexity of O(n) by reducing the lookup time for the complement to O(1) on average. The space complexity is O(n) to store up to n elements in the hash map.",
          diagram: null,
        },
      },
      balanced: {
        simple: {
          question: "Two Sum",
          answer:
            "I can solve this efficiently by using a hash map to keep track of the numbers I have already seen and their positions in the array. As I go through the array one number at a time, I figure out what number is needed to reach the target by subtracting the current number from the target. If that needed number is already in my hash map, I immediately return its index along with my current index. If it is not there yet, I save the current number and its index in the hash map and move on to the next one.",
          keySteps:
            "- Create an empty hash map to store numbers and their indices.\n- Loop through the array of numbers one by one.\n- Calculate the difference between the target and the current number.\n- Check if this difference is already inside the hash map.\n- If it is found, return the index from the hash map and the current index.\n- If not, add the current number and its index to the hash map.",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    # Keep track of numbers and their indices we have seen so far\n    seen = {}\n    \n    for i, num in enumerate(nums):\n        # Find the number needed to reach the target\n        difference = target - num\n        \n        # If the needed number is in our map, we found our pair\n        if difference in seen:\n            return [seen[difference], i]\n            \n        # Otherwise, add the current number and its index to the map\n        seen[num] = i\n        \n    return []",
          },
          explanation:
            "This approach uses a hash map to look up previous numbers in constant time. We only need to go through the array once, which gives us a time complexity of big O of n, where n is the number of elements in the array. The space complexity is also big O of n because in the worst case, we might store every number in the hash map.",
          diagram: null,
        },
        formal: {
          question: "Two Sum",
          answer:
            "I can solve this efficiently in O(n) time complexity by using a hash map to keep track of the numbers I have already seen and their indices as I iterate through the array. For each number, I calculate its complement by subtracting it from the target, and if that complement already exists in my hash map, I immediately return the stored index of the complement along with my current index. If it is not in the map, I simply store the current number and its index in the map and continue until I find the pair.",
          keySteps:
            "- Initialize an empty hash map to store numbers and their indices.\n- Iterate through the array of integers from left to right.\n- Calculate the complement for each element by subtracting it from the target.\n- Check if the complement exists in the hash map.\n- If it exists, return the index of the complement and the current index.\n- Otherwise, add the current element and its index to the hash map.",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    # Map to store the value and its corresponding index\n    seen = {}\n    \n    for i, num in enumerate(nums):\n        complement = target - num\n        \n        # Check if the complement is already in our map\n        if complement in seen:\n            return [seen[complement], i]\n            \n        # Otherwise, add the current number to the map\n        seen[num] = i\n        \n    return []",
          },
          explanation:
            "This approach uses a hash map to reduce the time complexity from O(n^2) in the brute-force approach to O(n) by performing lookups in constant time O(1). We traverse the array only once, making the time complexity O(n) and the space complexity O(n) to store the elements in the hash map.",
          diagram: null,
        },
      },
      detailed: {
        simple: {
          question: "Two Sum",
          answer:
            "I can solve this efficiently by using a hash map to keep track of the numbers I have already seen and their positions in the array. As I go through the array one number at a time, I figure out what number I need to reach the target by subtracting the current number from the target. If that needed number is already in my hash map, I immediately know I found the pair, so I can return its index along with my current index. If it is not in the hash map, I simply store the current number and its index in the map and move on to the next one. This way, I only need to look at each number once, which makes the whole process much faster than checking every possible pair with nested loops. For example, if my array is two, seven, eleven, and fifteen, and my target is nine, I look at two first. I need seven to reach nine, but seven is not in my map yet, so I save two with its index zero. Next, I look at seven. I need two to reach nine, and since two is already in my map at index zero, I return the index zero and my current index one. This gives me a time complexity of order of n and a space complexity of order of n, because I visit each element once and store them in the hash map.",
          keySteps:
            "- Create an empty hash map to store numbers and their indices.\n- Loop through the array from the first element to the last.\n- Calculate the difference between the target and the current number.\n- Check if this difference is already in the hash map.\n- If it is found, return the index from the hash map and the current index.\n- If it is not found, add the current number and its index to the hash map.",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    # Map to store the value and its corresponding index\n    seen = {}\n    \n    for i, num in enumerate(nums):\n        # Calculate the number needed to reach the target\n        complement = target - num\n        \n        # Check if the needed number is already in our map\n        if complement in seen:\n            return [seen[complement], i]\n            \n        # Otherwise, add the current number and its index to the map\n        seen[num] = i\n        \n    return []",
          },
          explanation:
            "This approach uses a hash map to achieve a linear time complexity of O(n) by reducing the search time for the complement to O(1) on average. The space complexity is also O(n) in the worst case, as we may store every element in the hash map before finding the target pair.",
          diagram: null,
        },
        formal: {
          question: "Two Sum",
          answer:
            "I can solve this efficiently by using a hash map to keep track of the numbers we've seen so far and their indices as we iterate through the array. For each element, I calculate its complement by subtracting it from the target value. If that complement already exists in our hash map, it means we've found the two numbers that add up to the target, and we can immediately return their indices. If the complement is not in the hash map, we simply store the current number and its index in the map and move on to the next element. This approach reduces the time complexity from a brute-force O(n squared) down to O(n) by trading space for time, requiring only a single pass through the array. For example, given the array 2, 7, 11, 15 and a target of 9, when we are at 7, its complement is 9 minus 7, which is 2. Since 2 is already in our hash map from the previous step, we return the index of 2 and our current index, 1.",
          keySteps:
            "- Initialize an empty hash map to store numbers and their indices.\n- Iterate through the array of integers from left to right.\n- Calculate the complement for each element by subtracting it from the target.\n- Check if the complement exists in the hash map.\n- Return the indices of the complement and the current element if found, otherwise add the current element to the hash map.",
          code: {
            language: "python",
            source:
              "def twoSum(nums, target):\n    # Hash map to store the value and its corresponding index\n    seen = {}\n    \n    for i, num in enumerate(nums):\n        complement = target - num\n        \n        # If complement exists in map, return indices\n        if complement in seen:\n            return [seen[complement], i]\n            \n        # Otherwise, add current number to the map\n        seen[num] = i\n        \n    return []",
          },
          explanation:
            "This approach uses a hash map to achieve an optimal O(n) time complexity by performing lookups in O(1) average time. We only need a single pass through the array, making it much faster than checking every possible pair. The space complexity is O(n) in the worst-case scenario because we may store every element in the hash map before finding the target pair.",
          diagram: null,
        },
      },
    },
  });

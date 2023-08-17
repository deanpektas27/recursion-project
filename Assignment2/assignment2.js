// Rather than doing a README,
// this is my second attempt at this problem
// in which I recreated the code and left 
// comments relevant to the steps taken

const mergeSort = (arr) => {
    // merge sort divides array into halves
    // those halves get halved up until we're down to one element

    // BASE CASE - Down to the last element
    // In Odin Project, "Think about what the base case is and what 
    // behavior is happening again and again and can actually be 
    // delegated to someone else (e.g. that same function)."

    // What is repeating is cutting the array in half until the 
    // length reaches 1 element only
    if(arr.length <= 1) {
        return arr;
    }

    let left = [];
    let right = [];
    // Push each element in array to correct side (left or right)
    // if element is positioned before or after middle of array,
    // put in correct variable
    for(const element in arr) {
        if(element < (arr.length / 2)) {
            left.push(arr[element]);
        }
        else {
            right.push(arr[element]);
        }
    }

    // After separation, perform recursion
    left = mergeSort(left);
    right = mergeSort(right);

    // Merge both pieces together
    return merge(left, right);
}

const merge = (leftArray, rightArray) => {
    let result = [];

    // While both arrays are not empty, 
    // compare values from both
    // Whichever one is lower, add to result array
    // Then remove element from stack
    while(leftArray.length && rightArray.length) {
        if(leftArray[0] <= rightArray[0]) {
            result.push(leftArray[0]);
            leftArray.shift();
        } else {
            result.push(rightArray[0]);
            rightArray.shift();
        }
    }
    // Once an array is empty, 
    // check if other one is empty, push
    // result of elements from that 
    // non empty array into result
    // Return result
    while(leftArray.length) {
        result.push(leftArray[0]);
        leftArray.shift();
    }
    while(rightArray.length) {
        result.push(rightArray[0]);
        rightArray.shift();
    }

    return result;
}

console.log(mergeSort([9,6,2,8,4,7]));
console.log(mergeSort([6,2,7,3,1,4]));
console.log(mergeSort([629, 91, 10, 7800, 328]));
# Fibonacci Project and Explanation

This is an assignment via the Odin Project, by Dean Pektas

I have decided to write out the solutions so that I can solidify my understanding of how both these solutions work and so that others that find this repository can get a better understanding if they become stuck like I did.

---

**<u>The Fibonacci Sequence</u>** is a list of numbers where each number is the sum of the previous two numbers. A portion of the sequence is as follows:

0, 1, 1, 2, 3, 5, 8, 13, 21, etc.. Where:
0 + 1 = 1, 
1 + 1 = 2,
1 + 2 = 3,
3 + 2 = 5, etc..

The goal of this assignment is to use two different methods of calculating all numbers in the sequence **( Iterative [Loops] and Recursion )** up to a user-inputted length and print the sequence into the console.

The iterative solution has been placed to the bottom of this README as the recursive solution was the hardest to understand and I believe is more important in this assignment.

---

## Recursive Solution

The function ``fibsRec`` passes in a number ``length`` and returns an array that holds all the numbers in the fibonacci sequence up to the number inputted by the user. 

```javascript
const fibsRec = (length) => {}
```

If you notice in the iterative solution, the function will build an array of the fibonacci sequence from the beginning. It adds the first two numbers in the sequence, 0 and 1 (which were hardcoded into the array), and continues up until the limit set by the user and stored in the ``num`` variable.

What makes the recursive solution so confusing for me as well as many others is that due to the nature of recursion, the sequence has to be built from the end to the beginning. 

[Learn Recursion via The Odin Project](https://www.theodinproject.com/lessons/javascript-recursive-methods)

One of the key ideas to keep in mind is that the last function call to be made within the process of recursion will be the first to push its value into the array. As each inner function call makes its way out to the return statement that was first made, the array has more values that will inevitably get pushed to it. 

```javascript
return [...fibsRec(length - 1), fibsRec(length-1)[length-2] + fibsRec(length - 1)[length-3]];
```

At first glance, to me atleast, this return statement looked incredibly difficult to understand. However, the best way to understand this is by tearing it down, ignoring the `...fibsRec(length-1),` part and evaluate it in smaller portions, starting with:

```javascript
fibsRec(length-1)[length-2] + fibsRec(length-1)[length-3]
```

We can understand this function the best by passing in the lowest number into it that doesn't immediately pass true in any of the if-statements, which would be 3 .

```javascript
const fibsRec = (3) => {}
```

In the if statements, 3 /= 2 or 1, so in this case we can immediately reach the last return statement mentioned above. This calls:

```javascript
fibsRec(3-1)[3-2] + fibsRec(3-1)[3-3]
```

Lets separate the two function calls and see how low we go:

| `fibsRec(3-1)[3-2]`                                       | `fibsRec(3-1)[3-3]`                                       |
| :-------------------------------------------------------- | --------------------------------------------------------- |
| `fibsRec(2)[1]` (Whatever returns, we want the [1] index) | `fibsRec(2)[0]` (Whatever returns, we want the [0] index) |
| `Evaluating if statements:`                               | `Evaluating if statements:`                               |
| length == 2, [0,1] is returned.                           | length == 2, [0, 1] is returned.                          |
| fibsRec(2)[1] = 1                                         | fibsRec(2)[0] = 0                                         |

We now have our requested values returned. Returning to this statement above the chart: 

```javascript
fibsRec(3-1)[3-2] + fibs(3-1)[3-3]
```

Gives us 1 + 0 = 1.

The outer brackets in the return statement will produce [1]. However, what you might've just noticed is that we requested the sequence with a length of 3, yet we only received value. What gives?

Lets bring back the original statement, in which we ignored the beginning of the statement: `return [...fibsRec(length - 1),`. This is the part that sticks the missing values into the array.

In our example using a `length` of 3, this would execute `fibsRec(3-1)`, which returns [0,1] because the second if statement, `if(length == 2)` is true in this case. 

The three dots in the beginning of this call are important, you may already be familiar with it but it is known as the **Spread Operator**. This copies over all elements of an iterable, such as an array or string. In the example above, the elements of [0,1] get copied into the first return statement that was executed.

This may not provide full clarity within just one example. However, you need to then try to execute this function using a bigger length. You'll then realize what's going on.

### TLDR

The portion of the return statement BEFORE the comma inside the array, 

```javascript
...fibsRec(length - 1)
```

will return all of the numbers in the Fibonacci Sequence UP TO one less than the inputted number. For example, if you pass in 8, you will get the first 7 digits in the sequence. 

The portion of the return statement AFTER the comma inside the array,

```javascript
fibsRec(length-1)[length-2] + fibsRec(length - 1)[length-3]
```

will return the next number in the sequence, completing the requested length of the sequence. it does this by taking the current array of numbers in the sequence and add the LAST and the SECOND TO LAST numbers in the sequence, and finally combining it with the rest of the sequence.



## iterative Solution

The function ``fibs`` passes in a number and returns an array variable that holds all the numbers in the fibonacci sequence up to the number inputted by the user.

```javascript
const fibs = (num) = {}
```

The function will default to initiatilizing a variable named ``arr``  and will decide to move forward depending on the value passed into the function by the user via the if statement at the beginning of the function.

```javascript
if(num <= 0) {
  return [null];
}
```

This just ensures that the function does not waste time calculating the sequence, as there is nothing that can be calculated if we have a requested length that is less than 1.

Moving forward, the array initializes with the first two values of the sequence, 0 and 1. These are needed to begin the sequence. The for loop is also introduced.

```javascript
let arr = [0, 1];
for(let i = 2; i < num; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}
```

Focusing on the initalization of the for loop, the variable iterating through the loop, ``i`` is initialized to 2, which is the third number in the sequence. This is because the array has 0 and 1 hardcoded in it (as mentioned earlier, this is needed for the function to have numbers to add). ``num`` is the number passed in by the user and will be the limit of this loop.

For each position that the loop iterates through, it will just set each position to the sum of the previous and second-previous number in the array. At the end of this loop, the function returns the completed array. 
/*
 1. Using iteration (loops), write a function 'fibs'
    which takes a number and returns an array 
    containing that many numbers from the fibonacci sequence. 
    Using an example input of 8, this function 
    should return the array [0, 1, 1, 2, 3, 5, 8, 13].

 2. Now write another function 'fibsRec' which solves
    the same problem recursively. This can be done in 
    just a couple of lines (or 1 if you're crazy, but 
    don't consider either of these lengths a requirement...
    just get it done).
*/

const fibs = (num) => {
  if(num <= 0) {
    return [null];
  }
  let arr = [0, 1];
  for(let i = 2; i < num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

const fibsRec = (length) => {
    if(length == 1) {
        return [0];
    }
    if(length == 2) {
        return [0,1];
    }

        return [...fibsRec(length - 1), fibsRec(length-1)[length-2] + fibsRec(length - 1)[length-3]];

    
}

console.log("Iterative", fibs(8));
console.log("Recursion", fibsRec(8));

/* 
    Examples that helped understand the flow of the function:


    Trying fibsRec(8): 

        length /= 1 or 2

    1. return [ …fibsRec(7), fibsRec(7)[6] + fibsRec(7)[5] ]

        7 /= 1 or 2

    2. return […fibsRec(6), fibsrec(6)[5] + fibsRec(6)[4] ]

        6 /= 1 or 2

    3. return […fibsRec(5), fibsrec(5)[4] + fibsRec(5)[3] ]

        5 /= 1 or 2

    4. return […fibsRec(4), fibsrec(4)[3] + fibsRec(4)[2] ]

        4 /= 1 or 2

    5. return […fibsRec(3), fibsrec(3)[2] + fibsRec(3)[1] ]

        3 /= 1 or 2

    6. return […fibsRec(2), fibsrec(2)[1] + fibsRec(2)[0] ]

        2 == 2, return [ 0 , 1 ]. Lets go back to line 6:

        fibsrec(2) = [0,1]
        Therefore, fibsrec(2)[1] = 1 and fibsrec(2)[0] = 0.
        0 + 1 = 1

        return [ …[0, 1], 1 ] = [0, 1, 1]. Lets go back to line 5: 

        fibsrec(3) returns [0, 1, 1]. 
        Therefore, fibsrec(3)[2] = 1 and fibsrec(3)[1] = 1
        1 + 1 = 2

        return [ …[0, 1, 1], 2 ] = [ 0, 1, 1, 2 ]. Back to line 4:

        [ ...[0, 1, 1, 2], 2 + 1 = 3 ] -> [ 0, 1, 1, 2, 3 ]

        etc…

*/

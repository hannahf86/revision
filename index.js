// 1. Write a function that takes an array of numbers and returns the sum of them
    // this is testing loops and math operators

    const arr = [2, 35, 52234, 12, 1432, 344, 5];

    // method 1 - REDUCE
    const sum = arr.reduce((a, b) => a + b, 0);
    console.log(sum)

    // method 2 - FOREACH   
    let sum2 = 0;
    arr.forEach((el) => sum2 += el);
    console.log(sum2)

    // method 3 - FOR LOOP
    let sum3 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum3 += arr[i];
    }
    console.log(sum3)
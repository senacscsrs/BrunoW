// 1. Declare a function called sayHello that prints "Hello!" to the console. Call the function.

function sayHello() {
    console.log("Hello!");
}


// 2. Declare a function called greet that takes one parameter called name and prints "Hello, name!" using console.log. Call it with your name.

function greet(name) {
    console.log(`Hello, ${name}!`);
}

// 3. Create a function sum that takes two numbers as parameters and returns their sum. Call it with 3 and 5 and print the result.

function sum(a, b) {
    return a + b;
}

console.log(sum(3, 5));

// 4. Write a function isEven that takes a number and returns true if it is even, false if odd. Test it with 4 and 7.

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


// 5. Create a function called factorial that calculates the factorial of a number passed as parameter and returns the result. (Factorial of 5 is 5*4*3*2*1 = 120)

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }  
}

// 6. Declare a function multiply that takes two numbers and returns their product. Use a function expression to declare it.


// 7. Write an arrow function called square that takes one number and returns its square. Call it with 6 and print the result.


// 8. Create a function that accepts an array of numbers and returns the sum of all elements. Test it with an array [1, 2, 3, 4, 5].


// 9. Write a function that takes a string and returns it reversed. E.g. input "hello", output "olleh".


// 10. Declare a function called countVowels that takes a string and returns the number of vowels (a, e, i, o, u) in it. Test with a sample string.

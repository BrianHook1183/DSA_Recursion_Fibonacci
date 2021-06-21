//TODO Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. The 0th Fibonacci number is defined as 0 and the 1st Fibonacci number is defined as 1. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 0, 1, 1, 2, 3, 5, 8, 13... .

/**
 * Return the nth fibonacci number
 * @param {integer} n
 */
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 2) + fibonacci(n - 1);
}

module.exports = fibonacci;

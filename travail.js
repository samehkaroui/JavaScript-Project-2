function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // "olleh"

  function countCharacters(str) {
    return str.length;
  }
  
  console.log(countCharacters("hello")); // 5
  
  function capitalizeWords(sentence) {
    return sentence.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  console.log(capitalizeWords("hello world")); // "Hello World"
  
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  console.log(findMax([1, 2, 3, 4, 5])); // 5
  
  function findMin(arr) {
    return Math.min(...arr);
  }
  
  console.log(findMin([1, 2, 3, 4, 5])); // 1
  
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  console.log(sumArray([1, 2, 3, 4, 5])); // 15
  
  function filterArray(arr, condition) {
    return arr.filter(condition);   
  }
  
  console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 === 0)); // [2, 4]
  
  function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0) return 1; // Base case
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // 120
  
  function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  console.log(isPrime(7)); // true
  console.log(isPrime(10)); // false
  
  function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n); // Return first n terms
  }
  
  console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
  
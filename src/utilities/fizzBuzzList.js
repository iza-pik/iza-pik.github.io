const fizzBuzz = (a) => a % 15 === 0 ? "FizzBuzz" : a % 3 === 0 ? "Fizz" : a % 5 === 0 ? "Buzz" : a;
const fizzBuzzCounter = num => Array.from({ length: num }, (_, i) => fizzBuzz(i + 1))

export default fizzBuzzCounter;
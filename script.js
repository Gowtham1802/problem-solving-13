`use script`;


let name = "gowtam";
console.log(name);



// 1.Swap two variables without using a temporary variable.

function swapVariables(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

console.log(swapVariables("Gowtham", "here"));



// 2. Check if a given number, is a prime number.


function isPrime(number) {
        if (number <= 1) {
          return false;
        }

        if (number <= 3) {
          return true;
        }

        if (number % 2 === 0 || number % 3 === 0) {
          return false;
        }

        for (let i = 5; i * i <= number; i += 6) {
          if (number % i === 0 || number % (i + 2) === 0) {
            return false;
          }
        }

        return true;
      }

      console.log(isPrime(7));
      console.log(isPrime(76));



// 3. Check if a given string is a valid email address.


function isValidEmail(email) {
  
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  return pattern.test(email);
}

console.log(isValidEmail('gowthama7575@email.com'));
console.log(isValidEmail('invalid-email')); 



// 4. Calculate the factorial of a number using a recursive function.


function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1); 
  }
}

console.log(factorial(7));



// 5. Reverse words in a sentence without reversing the individual words.


function reverseWordsInSentence(sentence) {
  const words = sentence.split(" ");
  const reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });
  
  const reversedSentence = reversedWords.join(" ");
    return reversedSentence;
 }
  console.log(reverseWordsInSentence("Gowtham Here"));


// 6. Write a sum method which will work properly when invoked using either syntax below.



console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());










// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return console.log(`Hello, ${name}!`);
}
// Remember to call the function to test
helloName("Peter");









// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber,secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(addNumbers(12, 19));









// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  return num1 * num2 * num3;
}
console.log(multiplyThree(10, 5, 2));









// 5. Function that will return true if a number is positive, or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );









// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if(array.length === 0){
    return undefined;
  }

  return array.slice(-1).toString();
}
let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
let empty = [];

console.log(getLast(colors));
console.log(getLast(empty));









// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for(let i = 0; i < array.length; i++){
    if(array[i] === value){
      return true;
    }
  }
  
  return false;
}
let food = ["pizza", "apples", "burger", "grapes"];
console.log(find("pizza", food));
console.log(find("ice cream", food));









// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for(let i = 0; i < string.length; i++){
    if(string[i] === letter){
      return true;
    }

    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );









// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0;
  // TODO: loop to add items
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

let numArr = [1, 2, 3, 4] // should equal 10
console.log(sumAll(numArr))









// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function posNum(array){
  let nums = [];
  for(let i=0; i < array.length; i++){
    if(array[i] > 0){
      nums.push(array[i]);
    }
  }

  return nums;
}
let nums1 = [1, 4, 0, 10, -12, 2, -4];
let nums2 = [0, -1, -2, -10];

console.log(posNum(nums1));
console.log(posNum(nums2));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Headline Hash Tags
// Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.

/*  Example

getHashTags("How the Avocado Became the Fruit of the Global Trade")
➞ ["#avocado", "#became", "#global"]

getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
➞ ["#christmas", "#probably", "#will"]

getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
➞ ["#surprise", "#parents", "#fruit"]

getHashTags("Visualizing Science")
➞ ["#visualizing", "#science"]

*/






/* 
- function will take in a phrase

  - phrase punctuation will be removed 
  - words will be moved into an array ( array of words )

  - tracker (will keep track of the longest words)
    - has to be in order of longest to shortest
    - has to have # in from
    - hash map (key = length, value = word)

  -> let tracker = [#word1, #word2, #word3];
  -> let phrase = headline.removePuncuation.toArray





  - for loop/ conditional statements
  
    -iterate through words
    
      -> section 1 (while tracker has less than three words)
        - automatically add the first word 
        -> section 1.a (tracker has atleast 1 word)
          - compare length of two words
            - if larger 
              - insert at curent index (index 0)
            -if smaller 
              - append (index 1)
        -> section 1.b 
          -> repeat 1.a
      
      -> section 2 ( while tracker has 3 words)
        - same as section 1 but nore more appending, only replacing 
      
      ->> theory
          - if 1 > 2 > 3 then if 4 > 1 then 4 must be > 2 and 3

  
  -> pseudo

    -> for (words in phrase){
        // section 1
        switch( tracker.length < 3){
          case tracker.length === 0:
            tracker.push({word.length: word});
            break;
          case tracker.length === 1:
            if(words[i].length > tracker[0.length]){
              tracker.splice(0,0,{word[i].length})
            }
            else{
              tracker.push({word[i].length: word[i]})
            };
            break;
          case tracker.length === 2:
            for(let i=0; i<tracker.length; i++){
                if(words[i].length > tracker[0.length]){
                  tracker.splice(0,0,{word[i].length})
                  break;
                }
              }
            }
            tracker.push({word[i].length});
            break;
          default:
            break;
        }

        if(tracker.length === 3){
          for(let j=0; j < tracker.length; j++){
            if(word[i].length > tracker[j].key){
              if(word !=== tracker[j].value){
                tracker.splice(j,0,{word.length: word})
                break;
              }
            }
          }
        }
    }


*/

function hashtag(phrase){
  let longest = [];
  let words = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");

  for(let i=0; i < words.length; i++){
    // section 1
    if(longest.length < 3){
      if(longest.length === 0){
        longest.push(`#${words[i]}`);
      }
      else if(longest.length === 1){
        if(longest[0].replace("#",'').length < words[i].length){
          longest.splice(0,0,`#${words[i]}`);
        } else{
          longest.push(`#${words[i]}`);
        };
      }
      else if(longest.length === 2){
        for(let i2=0; i2 < longest.length; i2++){
          if(words[i].length > longest[i2].replace('#','').length){
            longest.splice(i2, 0, `#${words[i]}`);
            break; 
          }
          longest.push(words[i]);
        }
        
      }
    }


    if(longest.length >= 3){
      for(let j=0; j<longest.length; j++){
        if(words[i].length > longest[j].replace('#','').length && j === 0){
          longest.pop();
          longest.splice(j,0,`#${words[i]}`)
          break;
        }
        else if(words[i].length > longest[j].replace('#','').length && j === 1){
          longest.pop();
          longest.splice(j,0,`#${words[i]}`)
          break;
        }
        else if(words[i].length > longest[j].replace('#','').length && j === 2){
          longest[j] = `#${words[i]}`
        }
      }
    }
  }

  return longest;
}

let header1 = "Why You Will Probably Pay More for Your Christmas Tree This Year";

console.log(hashtag(header1));



// problem 1:
// has repeats

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

- return 3 words (longest word)
  - tacker 
    - will contain an array of the current longest words and replace an old word if new word is longer
- take a string
  - remove all punctuation
  - append all words into an array


pseudo 

let longest = [#word1, #word2, #word3];
let head = headline.removePunctuation.toArray // should be an array of all the words

for(i of head){
  for(j of longest){
    if(i.length > j.length){
      replace j with i
    }
  }
}

return longest
*/
function hashtags(headline){
  let longest = [];
  let newHead = headline.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");

  for(let i = 0; i < newHead.length; i++){
    if(longest.length < 3){
      longest.push(`#${newHead[i]}`);
      console.log(longest + "p")
    }
    else{
      for(let j = 0; j < longest.length; j++){
        if(newHead[i].length > longest[j].replace("#","").length){
          for(let k =0; k < longest.length; k++){
            if(newHead[i] === longest[k].replace("#","")){
              continue;
            }
          }
          longest[j] = `#${newHead[i]}`;
        }
      }
    } 
  }

  return longest;
}

let header1 = "Why You Will Probably Pay More for Your Christmas Tree This Year";

console.log(hashtags(header1));

let asd = "#k"
console.log(asd        
  )

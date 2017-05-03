//Create a "cheat sheet" JavaScript file that contains working examples with comments that contains:

// Two variables with a number stored in each. Add these numbers together and output the result to the console.
var numberOne = 1;
var numberTwo = 2;

var total = numberOne + numberTwo;
console.log(total)

//A variable with an array stored inside. Output each item of the array using it's index, to the console.
var weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(weekDay[0]);
console.log(weekDay[1]);
console.log(weekDay[2]);
console.log(weekDay[3]);
console.log(weekDay[4]);

/*A variable with an object stored inside. The object should contain several properties with different data types.
Output some of these properties to the console using dot notation.
*/
var house = {
  value: 10,
  furniture:['Chair', 'Table'],
  appliances:['Frig', 'Washer', 'Dryer'],
  furnitureCheaper: true,
  applianceCheaper: false,
}
console.log(house.value,house.appliances[2],house.furnitureCheaper);

/* Create a "cheat sheet" JavaScript file that contains working examples with comments of:
- Logic
- Functions
- For Loops

/*Write a script that checks if a variable is less than or equal to 10. If it is, alert the user that their variable is less than or equal to 10. If it is not, using the console, let the user know that what the variable was and that it was greater than 10.*/
function checkTen(number) {
  var x = number
   if(x<10){
     alert(x + " is less than 10.")
     console.log(x + " is less than 10.");
   } else if(x>10){
     alert(x + " is greater than 10.")
    console.log(x + " is greater than 10.");
   }
   else{
     alert(x + " is equals than 10.")
    console.log(x + " is equals than 10.");
   }
}
checkTen(12)

/*Write a script that checks if a string stored in a variable is greater than 10 characters long. If it is, alert the user that their variable is greater than 10 characters long. If it is not, using the console, let the user know what the variable was, and that it was less than 10 characters long.*/
var word = "Ricardo Garcia";
console.log(word.length);

function storedStringCount(data) {
  var y = data
    if (y>10) {
    alert(word + " is greater than 10 characters long.");
    } else {
    console.log(word + " is " + y + " characters long" + " and it is less than 10 characters long.");
    }
}
storedStringCount(word.length);


//Write 3 different functions that each take an argument or two and return something via the console or an alert.
var name = "Ric";
var number = 4;

function takeName(name) {
  return console.log(name);
}
function takeNumber(number) {
  return console.log(number);
}
function takeNameNumber(name, number) {
  alert(name + " " + number);
}
takeNameNumber(name, number);



/* Setup an array of verbs. Loop through the array using a for loop and insert the verbs into a sentence that stays constant for each iteration of the loop. Show the user each sentence using a console.log statement. Example output:

I always knew I'd be great at jumping
I always knew I'd be great at running
I always knew I'd be great at fishing
*/

var verbs = ["exercise.", "meditate.", "relax."];
var text = "I like to ";
var i;
for (var i = 0; i < verbs.length; i++) {
    console.log(text + verbs[i]);
}

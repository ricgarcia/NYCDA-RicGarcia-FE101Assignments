/* Create at least 3 JavaScript objects. Each object should have at least one method. Use the object literal method and the constructor function method at least once each to construct these objects. Instantiate the objects and exemplify your understanding of them through JavaScript code and comments.
*/


// object 1
var soda = {
  brand: 'Pepsi',
  flavor: 'Mountain Dew',
  soda_comment: function(comment) {
    console.log(comment);
  },
};
soda.soda_comment("It's refreshing!")


// object 2
var myCar = {
  make: "Mazda",
  model: "Mazda5",
  year: 2015,
  myFavCarColor: function(color) {
    console.log(color)
  },
};
myCar.myFavCarColor('Blue')


// object 3
//constructor function method
function sportsCar(model, year) {
  this.model = model;
  this.year = year;
  this.talk = function() {
    alert( this.model+this.year + ' is my favorite!')
  };
};
var myCar = new sportsCar('Enzo ', 2013);
myCar.talk()
myCar2 = new sportsCar('Camaro ', 2017);
myCar2.talk()

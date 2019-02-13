/*
Name: Jennifer Long
Exercise File for Week 1 Source, see Week1.txt for details
*/

//ES6 function syntax
const personOne = favoriteFoods => {
  favoriteFoods.forEach(function(foodItem){
    console.log(foodItem);
  });
};

const personTwo = favoriteMovies => {
  /*insert functionality here*/
};

const personThree = favoriteAnimals => {
  /*insert functionality here*/
};

//Variable arrays
const favoriteFoods = ["Ice cream", "Pasta", "Mike's hard", "Quesadillas"],
  favoriteMovies = [],
  favoriteAnimals = [];

const iceBreaker = () => {
  personOne(favoriteFoods);
};

iceBreaker();

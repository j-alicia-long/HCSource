/*
Name: Jennifer Long
Puppy Age Calculator
*/

//ES6 function syntax
const calculateDogAge = (age, ratio, humanToDog=true) => {
  return humanToDog ? age*ratio : age/ratio;
};

const main = () => {
  const humanYears = [5, 8, 3];
  const dogYears = [25, 18, 73];
  const ratio = 7;
  // human years to dog years
  humanYears.forEach(function(age){
    console.log(`Your ${age} year old doggie is ${calculateDogAge(age, ratio, true)} years old in dog years!`);
  });
  // dog years to human years
  dogYears.forEach(function(age){
    console.log(`Your ${age} year old doggie is ${calculateDogAge(age, ratio, false)} years old in human years!`);
  });
  // Default is human to dog
  console.log(`Your 7 year old doggie is ${calculateDogAge(7, ratio)} years old in dog years!`);
};

main();

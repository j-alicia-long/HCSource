/*
Name: Jennifer Long
Puppy Age Calculator
*/

//ES6 function syntax
const calculateDogAge = (humanAge, ratio) => {
  return humanAge*ratio;
};

const main = () => {
  const ages = [5, 8, 3];
  const ratio = 7;
  ages.forEach(function(age){
    console.log(`Your doggie is ${calculateDogAge(age, ratio)} years old in dog years!`);
  });
};

main();

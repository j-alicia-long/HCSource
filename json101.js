/*
Name: Jennifer Long
JSON 101
*/

//ES6 function syntax
const toJSON = strings => {
  jsonObj = {
    length: strings.length,
    sentence: strings.join(" ")
  };
  return jsonObj;
};

const getNames = people => {
  return people.map((person) => {return person.name});
};

const main = () => {
  const array1 = ["This", "is", "my", "first", "JSON", "script!"];
  console.log(toJSON(array1));

  const array2 = [{name:"Jen", age:"20"}, {name:"Bill", age:"18"}, {name:"Alli", age:"16"}];
  console.log(getNames(array2));
};

main();

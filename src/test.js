const aString = "The javascript is awesome";

const getIndexCharacter = (aString, character) =>
  [...aString].reduce(
    (acc, item, index) =>
      item.toLowerCase() === character.toLowerCase() ? [...acc, index] : acc,
    []
  );

// console.log(getIndexCharacter(aString));
console.log(getIndexCharacter(aString, "i"));
console.log(getIndexCharacter(aString, "t"));

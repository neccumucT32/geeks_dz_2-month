// let hidePhone = +996555123123;

function hide(number) {
  const removeNumber = number.slice(0, -2) + "xx";
  return removeNumber;
}
console.log(hide("+996555123123"));

function charCount(word, letter) {
  const lowerWord = word.toLowerCase(); // text trancsform upperCase т.е заглавные и строчные
  const lowerLetter = letter.toLowerCase();
  return lowerWord.split("").filter((c) => c === lowerLetter).length;
}
console.log(charCount("Abrakadabra", "A"));
console.log(charCount("hello", "l"));

let deperSonalize = "Киселев";

function deper(Name) {
  const hideName = Name.slice(0, 7);
  return hideName;
}
console.log(deper("К_____в"));

let deperSonalize2 = "Евгений";

function deper(Name) {
  const hideName = Name.slice(0, 7);
  return hideName;
}
console.log(deper("Е_____й"));

let deperSonalize3 = "Дмитриевич";

function deper(Name) {
  const hideName = Name.slice(0, 10);
  return hideName;
}
console.log(deper("Д________ч"));

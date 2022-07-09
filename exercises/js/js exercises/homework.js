// Array task 1
let firstArray = [33, '', 'salam', true, null, false, 0];

// function removeFalsyValues(item) {
//   if (Boolean(item)) return item;
// }

// let newArray = firstArray.filter(removeFalsyValues);

// console.log(newArray);

let tricky = firstArray.filter(Boolean);
console.log(tricky);

//Array Task 2
let randomArray = [33, '', 'salam', true, null, false, 0];

let getRandomValues = randomArray[Math.floor(Math.random() * randomArray.length)];

console.log(getRandomValues);

// Array Task 3

let duplicateArray = [1, 123, 33, 45, 66, 45, 123, 1];

let removeDuplicate = [...new Set(duplicateArray)];

console.log(removeDuplicate);

//Array Task 4

let fourthArray = [1, 123, 33, 45, 66, 45];

let removeArray1 = fourthArray.slice(0, 3);
let removeArray2 = fourthArray.slice(4, 5);

let removeFromArray = removeArray1.concat(removeArray2);

console.log(removeFromArray);

// Date Task 1

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let firstDate = new Date('10/11/2009');
console.log(months[firstDate.getMonth()]);

// Date Task 2

function getNumberOfDays(year, month) {
  let daysInMonth = new Date(year, month + 1, 0);
  return daysInMonth.getDate();
}

console.log(getNumberOfDays(2020, 05));

// Date Task 3

let thirdDate = new Date();

function renderCopyRight() {
  return `Copyright \u00A9 ${thirdDate.getFullYear()}. All Rights Reserved`;
}

console.log(renderCopyRight(thirdDate));

//Date Task 4
let fourthDate = new Date('Dec 21, 2020');

function isWeekend() {
  if (fourthDate.getDay() != 0 || fourthDate.getDay() != 6) return false;
}
console.log(isWeekend(fourthDate));

//Number 1
function percentage(a, b) {
  return (b * 100) / a;
}
console.log(percentage(2345, 190).toFixed(2));

//String 1
let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
function truncate(str, number) {
  return str.split(' ').splice(0, number).join(' ');
}
console.log(truncate(text, 3));

//String 2

let truncateText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
function truncateT(text, maxLength) {
  if (text.length > maxLength) return text.slice(0, maxLength - 2) + '...';
}

// function truncateT(str, maxlength) {
//   return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
// }

console.log(truncateT(truncateText, 20));

//Lorem ipsum dolor s…
// Lorem ipsum dolor ...

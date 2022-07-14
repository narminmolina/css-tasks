//Task 1

let pieceOfText = document.getElementById('highlighted');
pieceOfText.innerHTML = pieceOfText.textContent
  .split(' ')
  .map((word) => (word.length > 8 ? `<span style="background-color:yellow";>${word}</span>` : word))
  .join(' ');

//Task 2
console.log(document.getElementById('container'));
console.log(document.querySelector('.container'));
console.log(document.getElementsByClassName('second'));
console.log(document.querySelector('ol>li.third'));

//Task 5
let newText = document.createTextNode('Hello!');
let section = document.getElementById('container');
section.appendChild(newText);

//task 6
let newClass = document.querySelector('.footer');
newClass.classList.add('main');

//task 7
newClass.classList.remove('main');

//task 8
let oList = document.querySelectorAll('ol li');
console.log(oList);

for (let i = 0; i < oList.length; i++) {
  oList[i].style.backgroundColor = 'green';
}

// oList.forEach((element) => {
//   element.style.backgroundColor = green;
// });
// olList.map((item) => `<li> style="background-color:yellow";>${item}</li>`);

//task 9
document.querySelector('title').textContent = 'Made with Js';

//task 10
document.documentElement.setAttribute('lang', '');

//Task 1 for event
let headings = document.querySelectorAll('.events');
Array.from(headings).forEach(function (headings) {
  headings.addEventListener('click', function (e) {
    e.target.remove();
  });
});

//Task 2 for events

let displayRandomImage = function () {
  let imageArray = new Array('a.jpg', 'e.jpg', 'w.jpg');
  let randomNum = Math.floor(Math.random() * imageArray.length);
  randomImage = imageArray[randomNum];

  let mainImage = document.querySelector('#mainImage');

  mainImage.src = `./images/${randomImage}`;
};

let btn = document.querySelector('.task2 button');
btn.addEventListener('click', displayRandomImage);

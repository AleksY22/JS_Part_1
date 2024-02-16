'use strict';

//====================Взаимодействие с пользователями======================

let numberOfFilms;

const personalMovieDB = {
   count: numberOfFilms,
   movies: {

   },
   actors: {

   },
   genres: [],
   privat: false,
};

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const nameLastFilm = prompt('Один из последних просмотренных фильмов?', '');
      const ratingLastFilm = prompt('На сколько оцените его?', '');
      if (nameLastFilm != null && ratingLastFilm != null && nameLastFilm != '' && ratingLastFilm != '' && nameLastFilm.length < 50) {
         personalMovieDB.movies[nameLastFilm] = ratingLastFilm;
      } else {
         i--;
      }
   }
}

function showMyDB(filmDataBase) {
   if (filmDataBase.privat == false) {
      console.log(filmDataBase);
   }
}

function writeYourGenres(filmDataBase) {
   for (let i = 1; i <= 3; i++) {
      filmDataBase.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
}

start();

rememberMyFilms();

showMyDB(personalMovieDB);

writeYourGenres(personalMovieDB);


//==========================Циклы========================
//==================Треугольник==========================
/*
let resultOut = '';
const lenghtStr = 7;

for (let i = 1; i < lenghtStr; i++) {
   for (let j = 0; j < i; j++) {
      resultOut += '*';
   }
   resultOut += '\n';
}

console.log(resultOut);
*/

/*
//================Метки====================
first: for (let i = 0; i < 3; i++) {
   console.log(`First level: ${i}`);
   for (let j = 0; j < 3; j++) {
      console.log(`Second level: ${j}`);
      for (let k = 0; k < 5; k++) {
         if (k === 2) break first;
         console.log(`Third level: ${k}`);
      }
   }
}
*/

/*
//===============Задачи===================
let i = 5;
while (i < 11) {
   console.log(i);
   i++;
}

for (let j = 20; j >= 10; j--) {
   if (j === 13) break;
   console.log(j);
}

for (let k = 2; k <= 10; k += 2) {
   console.log(k);
}

let j = 2;
while (j <= 16) {
   if (j % 2 === 0) {
      j++;
      continue;
   } else {
      console.log(j);
   }
   j++;
}

const arrayOfNumbers = [];
let count = 0;

for (let i = 5; i <= 10; i++) {
   arrayOfNumbers[count] = i;
   count += 1;
}
console.log(arrayOfNumbers);
*/
/*
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
   result[i] = arr[i];
}
console.log(result);

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
   if (typeof (data[i]) === 'string') {
      data[i] = data[i] + ' - done';
   } else {
      data[i] = data[i] * 2;
   }
}
console.log(data);

const result = [];

for (let i = 1; i <= data.length; i++) {
   result[i - 1] = data[data.length - i];
}

console.log(result);
*/
/*
//v.1
let lines = 5;
let result = '';
let j = 1;
for (let i = 1; i < 7; i++) {
   let lineStr = '';
   lineStr = ' '.repeat(lines) + '*'.repeat(j) + '\n';
   lines -= 1;
   j += 2;
   result += lineStr;
}
console.log(result);
*/
/*
//v.2
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
   for (let j = 0; j < lines - i; j++) {
      result += ' ';
   }
   for (let j = 0; j < 2 * i + 1; j++) {
      result += '*';
   }
   result += '\n';
}

console.log(result);
*/
/*
function sayHello(name) {
   return `Привет, ${name}`;
}

function returnNeighboringNumbers(num) {
   return [num - 1, num, num + 1];
}

function getMathResult(base, rep) {
   if (rep <= 0 || typeof (rep) != 'number') {
      return base;
   } else {
      let str = '';
      for (let i = 1; i <= rep; i++) {
         if (i === rep) {
            str += `${base * i}`;
         } else {
            str += `${base * i}---`;
         }
      }
      return str;
   }
}
*/
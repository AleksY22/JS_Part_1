'use strict';
/*

//====================Взаимодействие с пользователями

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {

   },
   actors: {

   },
   genres: [],
   privat: false,
};

const nameLastFilm = prompt('Один из последних просмотренных фильмов?', '');
const ratingLastFilm = prompt('Один из последних просмотренных фильмов?', '');
personalMovieDB.movies[nameLastFilm] = ratingLastFilm;
console.log(personalMovieDB);
*/

//==========================Циклы
//==================Треугольник
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
//================Метки
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
//===============Задачи
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


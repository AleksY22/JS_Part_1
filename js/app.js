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

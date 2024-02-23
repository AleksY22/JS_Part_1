'use strict';

//====================Взаимодействие с пользователями======================

const personalMovieDB = {
   count: 0,
   movies: {

   },
   actors: {

   },
   genres: [],
   privat: false,
   start: function () {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      }
   },
   rememberMyFilms: function () {
      for (let i = 0; i < 2; i++) {
         const nameLastFilm = prompt('Один из последних просмотренных фильмов?', '');
         const ratingLastFilm = prompt('На сколько оцените его?', '');
         if (nameLastFilm != null && ratingLastFilm != null && nameLastFilm != '' && ratingLastFilm != '' && nameLastFilm.length < 50) {
            personalMovieDB.movies[nameLastFilm] = ratingLastFilm;
         } else {
            i--;
         }
      }
   },
   showMyDB: function (filmDataBase) {
      if (filmDataBase.privat == false) {
         console.log(filmDataBase);
      }
   },
   writeYourGenres: function (filmDataBase) {
      for (let i = 1; i <= 3; i++) {
         let answerToQuestion = prompt(`Ваш любимый жанр под номером ${i}`);
         if (answerToQuestion == null || answerToQuestion === '') {
            i--;
         } else {
            filmDataBase.genres[i - 1] = answerToQuestion;
         }
      }
      filmDataBase.genres.forEach((element, index) => {
         console.log(`Любимый жанр ${index + 1} - это ${element}`);
      });
   },
   toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   }
};


//personalMovieDB.start();

//personalMovieDB.rememberMyFilms();

//personalMovieDB.showMyDB(personalMovieDB);

//personalMovieDB.writeYourGenres(personalMovieDB);

//personalMovieDB.toggleVisibleMyDB();
//console.log(personalMovieDB.privat);

//personalMovieDB.writeYourGenres(personalMovieDB);
//console.log(personalMovieDB.genres);

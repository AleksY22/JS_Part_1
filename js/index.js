const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
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
personalMovieDB.movies[`${nameLastFilm}`] = ratingLastFilm;
console.log(personalMovieDB);
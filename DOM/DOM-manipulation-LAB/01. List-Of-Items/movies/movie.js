
const moviesList = document.getElementById('movie-list');
const firstMovie = document.createElement('li');
const secondMovie = document.createElement('li');
const thirdMovie = document.createElement('li');

firstMovie.textContent = 'Star Wars';
secondMovie.textContent = 'Lord of The Rings';
thirdMovie.textContent = 'Harry Potter';


moviesList.append(firstMovie);
moviesList.append(secondMovie);
moviesList.append(thirdMovie);

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

const aElement = document.createElement('a');
const createLiElement = document.createElement('li');


aElement.href = "https://www.imdb.com/title/tt0133093/?ref_=fn_al_tt_1";
aElement.textContent = 'The Matrix';
aElement.target = '_blink';

createLiElement.append(aElement);

moviesList.append(createLiElement)
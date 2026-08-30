
const movieUlElement = document.getElementById('movie-list');
const firstMovieList = document.createElement('li');
const secondMovieList = document.createElement('li');
const thirdMovieList = document.createElement('li');
firstMovieList.textContent = 'Star Wars';
secondMovieList.textContent = 'Man of Steel'
thirdMovieList.textContent = 'HEAT'



setTimeout( () => { 
     movieUlElement.appendChild(firstMovieList);
    }, 4000);
movieUlElement.appendChild(secondMovieList)
movieUlElement.appendChild(thirdMovieList);


const newEl = document.createElement('a');
newEl.href = 'https://www.imdb.com/title/tt0133093/?ref_=fn_al_tt_1';
newEl.textContent = 'The Matrix';
newEl.target = '_blank';

const theMatrix = document.createElement('li');
theMatrix.appendChild(newEl)
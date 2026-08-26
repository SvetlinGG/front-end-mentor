function search() {
   
   const towns = document.querySelectorAll('#towns li');
   const inputText = document.querySelector('#searchText').value;
   const matches = document.querySelector('#result');
   let count = 0;

   if ( inputText === '' || inputText === ' '){
      matches.textContent = '0 matches found'
   }else{
      towns.forEach(town => {
         if (town.textContent.includes(inputText)){
            count ++
            matches.textContent = `${count}
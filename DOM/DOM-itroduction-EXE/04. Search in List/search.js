function search() {
   
   const towns = document.querySelectorAll('#towns li');
   const inputText = document.querySelector('#searchText');
   const matches = document.querySelector('#result');
   let count = 0;

   if ( inputText.value === '' || inputText.value === ' '){
      matches.textContent = '0 matches found'
   }else{
      towns.forEach(town => {
         if (town.textContent.includes(inputText.value)){
            count ++
            matches.textContent = `${count} matches found`;
            town.style.fontWeight = 'bold'
            town.style.textDecoration = 'underline'
         }else if(!town.textContent.includes(inputText.value)){
            town.style.fontWeight = 'normal'
            town.style.textDecoration = 'none'
         }
      })
   }
}

function colorize() {

   const selectRows = document.querySelectorAll('table tr:nth-child(even)');
   for ( let row of selectRows){
    row.style.background = 'lightblue'
   }
   
  
}
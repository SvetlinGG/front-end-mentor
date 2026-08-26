function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let rows = document.querySelectorAll('tbody tr');

   function onClick(){
      let inputValueToLower = document
                  .getElementById('searchField')
                  .value.toLowerCase();

                  for ( let row of rows){
                     const rowToLower = row.textContent.toLowerCase();
                     if ( rowToLower.includes(inputValueToLower)){
                        row.setAttribute('class', 'select');
                     }else {
                        row.removeAttribute('class');
                     }
                  }
   }
   
}
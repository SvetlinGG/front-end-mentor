function solve() {
  
  let string = document.getElementById('text').value;
  let parameter = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  string = string.toLowerCase();

  if ( parameter == 'Camel Case'){
    string = string.split(' ')
                  .map((word, index) => {
                    if( index > 0){
                      return word.replace(word[0], word[0].toUpperCase())
                    }else {
                      return word;
                    }
                  })
                  .join('');
  }else if ( parameter == 'Pascal Case'){
    string = string.split(' ')
                    .map( word => word.replace(word[0], word[0].toUpperCase()))
                    .join('');
                    //console.log(string);
  }else {
    string = 'Error!'
  }
  result.textContent = string;
}
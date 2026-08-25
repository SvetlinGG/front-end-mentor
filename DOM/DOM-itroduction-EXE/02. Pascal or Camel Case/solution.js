function solve() {
  
  let word = document.getElementById('text').value;
  let convert = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  word = word.toLowerCase();

  if ( convert == 'Camel Case'){
    word = word.split(' ').map((el, index) => {
      if (index == 0){
        return el;
      }else {
        return el.charAt(0).toUpperCase() + el.slice(1);
      }
    })
  } else if ( convert == 'Pascal Case'){
    word = word.split(' ').map((el) => {
      el.charAt(0).toUpperCase()
    })
  } else {
    return 'Error';
  }

  result.value = word
}
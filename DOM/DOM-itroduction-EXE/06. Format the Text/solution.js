function solve() {

  const input = document.getElementById('input');
  const output = document.getElementById('output');

  const result = input.value.split('.').filter(e => e.length > 0);
  
  for ( let i = 0; i < result.length; i ++){
    let res = [];
    for ( let x = 0; x < 3; x ++){
      if ( !result[i + x ] ){
        break;
      }
      res.push(result[i + x]);
    }
    let p = document.createElement('p');
    p.textContent = res.join('.') + '.';
    output.appendChild(p);
  }
  
  
  
}

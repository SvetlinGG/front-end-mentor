function solve() {

  const textArea = document.getElementById('input').value;
  const resultDiv = document.getElementById('output');
  const sentenceArr = textArea.split('.')
                              .filter( (s)=> s !== '')
                              .map((s) => s + '.');

  const paragraphRoof = Math.ceil(sentenceArr.length /3);

    for ( let i =0; i < paragraphRoof; i++){
      const joinSentence = sentenceArr.splice(0, 3).join('.');
      resultDiv.innerHTML +=` <p>${joinSentence}</p>`

    }

  /*let textArea = document.getElementById('input');
  let output = document.getElementById('output');
  let incomeText = textArea.value.split('.').filter( x => x !== '');

  output.innerHTML = '';

      for( let i=0; i < incomeText.length; i +=3){
        const paragraph = incomeText.slice(i,  3 + i).join('.');

        output.innerHTML = `<p> ${paragraph}. </p>`
      }*/


  /*let textArea = document.getElementById('input');
  let resultRef = document.getElementById('output');
  let incomeText = textArea.value.split('.').filter(e => e.length >0);

  for ( let i=0; i <incomeText.length; i+=3){
    let res = [];
    for ( let x=0; x <3; x++){
      if ( !incomeText[i+x]){
        break;
      }
      res.push(incomeText[i+x]);
    }
    let p = document.createElement('p');
    p.textContent = res.join('.')+ '.';
    resultRef.appendChild(p)
  }*/
}
//solve(JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web. JavaScript enables interactive web pages and thus is an essential part of web applications. The vast majority of websites use it, and all major web browsers have a dedicated JavaScript engine to execute it. As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles. It has an API for working with text, arrays, dates, regular expressions, and basic manipulation of the DOM, but the language itself does not include any I/O, such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded.)
function deleteByEmail() {
    const resultElement = document.getElementById('result');
    const inputEl = document.querySelector('input[name=email]');

    const trElements = document.querySelectorAll('#customers tbody tr');
    
    const resultRow = Array.from(trElements)
        .find( tr => tr.getElementsByTagName('td')[1].textContent === inputEl.value );
        if ( resultRow){
            resultRow.remove();
            resultElement.textContent = 'Deleted.';
        }else {
            resultElement.textContent = 'Not found.'
        }

}
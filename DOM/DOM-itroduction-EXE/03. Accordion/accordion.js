function toggle() {
    
    
    let text = document.getElementById('extra');
    let button = document.querySelector('.button');

    if (button.textContent === 'MORE'){
        text.style.display = 'inline-block';
        button.textContent = 'LESS';
    }else {
        text.style.display = 'none';
        button.textContent = 'MORE'
    }
    
}
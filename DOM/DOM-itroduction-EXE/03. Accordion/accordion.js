function toggle() {
    
    let button = document.querySelector('.button');
    let div = document.getElementById('extra');

    if (button.textContent == 'More'){
        div.style.display = 'block';
    }else {
        div.style.display = 'none';
    }
    button.textContent = button.textContent == 'More' ? 'Less' : 'More';
    
}
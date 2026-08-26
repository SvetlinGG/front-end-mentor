function toggle() {
    
    let accordion = document.getElementById('accordion');
    let text = document.getElementById('extra');
    let button = document.getElementsByClassName('button');

    if (button.value === 'More'){
        text.style.direction = 'block'
    }else if (text.style.display === 'block'){
        text.style.display = 'none'
    }
    
}
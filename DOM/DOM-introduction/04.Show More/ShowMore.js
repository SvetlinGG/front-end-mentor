function showText() {

    let text = document.getElementById('more');
    let change = document.getElementById('text');

    text.textContent = change.value
    change.style.display = 'inline';
    
}
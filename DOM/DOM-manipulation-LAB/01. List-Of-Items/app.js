function addItem() {
    
    const item = document.getElementById('items');
    const newItem = document.getElementById('newItemText').value;
    item.innerHTML += `<li>${newItem}</li>`;
    newItem = 'focus'
    


}
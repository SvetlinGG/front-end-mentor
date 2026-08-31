function addItem() {
    
    const item = document.getElementById('items');
    const newItem = document.getElementById('newItemText');
    

    const newLiElement = document.createElement('li');
    newLiElement.textContent = newItem.value;

    item.append(newLiElement);
    

    // clean up value
    
    newItem.value = '';

    // focus input

    newItem.focus();


}
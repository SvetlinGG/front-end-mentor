function sumTable() {
    let total = 0;
    let productPrice = document.querySelectorAll('tr td:nth-child(2)');
    let sum = document.getElementById('sum');
    
    
    
    for (let price of productPrice){
        total += Number(price.textContent)

        
        
    }
    sum.textContent = total;
    sum.style.background = 'lightgree
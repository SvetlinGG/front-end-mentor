function sumTable() {
    let total = 0;
    let productPrice = document.querySelectorAll('tr td:nth-child(2)');
    let sum = document.getElementById('sum');
    
    
    
    for (let price of productPrice){
        total += Number(price.textContent)

        
        
    }
    sum.value = total
    console.log(sum.value);
    

}
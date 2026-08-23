function sumTable() {
    let total = 0;
    let productPrice = document.querySelectorAll('table td');
    let sum = document.getElementById('sum');
    
    for (let price of productPrice){
        total += price;
        sum.value = total;
    }

}
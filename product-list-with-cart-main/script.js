function addProduct() {
    let totalPrice = 0; 
  
    const button = document.getElementById('add-waffel');
    const priceEl = document.getElementById('price-waffel');
  
    button.addEventListener('click', () => {
      
      const price = parseFloat(priceEl.textContent.replace('$', '').trim());
  
      totalPrice += price;
  
      console.log("Added product price:", price);
      console.log("Total price so far:", totalPrice);
    });
  }
  
  addProduct();
  


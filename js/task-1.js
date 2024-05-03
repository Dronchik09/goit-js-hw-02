function makeTransaction(quantity, pricePerDroid, customerCredits){
    totalPrice= quantity * pricePerDroid;
    if(totalPrice>customerCredits){
      return "Insufficient funds!";
    }
    else{
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`
    }
}
console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(8, 2000, 10000));
function getShippingCost(country){
    let deliveryChina = 100;
    let deliveryChile = 250;
    let deliveryAustralia = 170;
    let deliveryJamaica = 120;
    switch(country){
        case "China":
            return `Shipping to ${country} will cost ${deliveryChina} credits`;
        case "Chile":
            return `Shipping to ${country} will cost ${deliveryChile} credits`;
        case "Australia":   
            return `Shipping to ${country} will cost ${deliveryAustralia} credits`;
        case "Jamaica":
            return `Shipping to ${country} will cost ${deliveryJamaica} credits`;
        
        default:
            return "Sorry, there is no delivery to your country";
    }

}
console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile")); 
console.log(getShippingCost("Jamaica")); 
console.log(getShippingCost("Sweden"));
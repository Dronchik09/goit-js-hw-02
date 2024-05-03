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
        }

}
console.log(getShippingCost("Australia"));
function checkForSpam(message){
const hasSpam = message.includes("spam");
    const hasSale = message.includes("sale");
    let messageFill = message.toLowerCase();
    if(hasSpam || hasSale){
        return "true";
    }
    else{
        return "false";
    }
}
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("Get best sale offers now!"));
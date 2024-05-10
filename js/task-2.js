function formatMessage(message, maxLength){
    let dots= "..."
    if(message.length == maxLength || message.length <maxLength){
        return message;
    }
    else{
        return message.slice(0, maxLength)+ dots;
    }
}
console.log(formatMessage("Curabitur ligula sapien", 16)); 
console.log(formatMessage("Curabitur ligula sapien", 23)); 
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); 
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); 
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); 
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
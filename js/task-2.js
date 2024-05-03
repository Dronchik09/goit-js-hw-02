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
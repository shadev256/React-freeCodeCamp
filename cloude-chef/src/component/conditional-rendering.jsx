import React from "react";
export function conditionalRendering(){
    const [message, setMessages] = React.useState(['added', 'removed', 'updated']);
    function getMessageStatus() {
       return message ?  message.length > 1 ? `you ${message.length} unread messages`: "You have 1 unread message" :  "No messages available";
    }
    return (
        <div>
            <h1>{getMessageStatus()}</h1>
            </div>
    )
}
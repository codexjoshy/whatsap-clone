import React from 'react'
import "../css/chat.css"
export default function Message({message, index}) {  
    if(message.recieved){
        return (
            <>
                 <p className="chat-message chat-reciever">
                    <span className="chat-name">{message.name}</span>
                    {message.message}
                    <span className="chat-timestamp">
                        {/* {message.timestamp?new Date(message.timestamp?.toDate()).toUTCString():new Date().toUTCString()} */}
                    </span>
                </p>
            </>
        )
    } else{
        return (
            <>
                <p key={index} className="chat-message">
                    <span className="chat-name">{message?.name}</span>
                    {message?.message}
                    <span className="chat-timestamp">
                        {/* {message.timestamp?new Date(message.timestamp.toDate()).toUTCString():new Date().toUTCString()} */}
                    </span>
                </p>
            </>
        )
    }
}

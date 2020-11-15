import React from 'react'
import './Messages.css'
function Messages({sendersName,message}) {
    return (
        <div className = "messages">
            <h4>{sendersName}</h4>
            <p>{message}</p>
        </div>
    )
}

export default Messages

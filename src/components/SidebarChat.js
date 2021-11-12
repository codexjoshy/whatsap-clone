import { Avatar } from '@material-ui/core'
import React from 'react'
import "../css/sidebarChat.css"
function SidebarChat(props) {
    return (
        <div className="sidebarChat">
            <Avatar src={props.src} />
            <div className="sidebarChat-message">
                <h3>{props.name}</h3>
                <p>This is a chat message</p>
            </div>
        </div>
    )
}
export default SidebarChat

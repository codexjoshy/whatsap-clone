import { Avatar, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import "../css/chat.css"
import {SearchOutlined,MoreVert, AttachFile, InsertEmoticon, Mic as MicIcon} from '@material-ui/icons';

import Message from './Message';
import axios from '../service/axios'

 
function Chat({messages}) {
    const [input, setInput] = useState('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await axios.post('/message/create',{
            name:'Joshua',
            message:input,
            timestamp:new Date().toUTCString(),
            recieved:true
        }).then(res=>alert('message sent '))
            .catch(err=>console.log(err))
        setInput('');
    }

    return (
        <div className='chat'>
            <div className='chat-header'>
                <Avatar src={require("../asset/women/5.jpg")} />
                <div className='chat-header-info'>
                    <h3>Mercy Name</h3>
                    <p>last seen Fri, 04 Sep 2020</p>
                </div>
                <div className='chat-header-icons'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div> 
            <div className='chat-body'>
                <div className="chat-message-container">
                    {
                        messages.map((message, index)=>(
                            <Message key={index} message={message} />
                        ))
                    }
                    
                </div>
            </div>
            <div className="chat-footer">
                <InsertEmoticon />
                <form onSubmit={()=>handleSubmit()}>
                    <input 
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        placeholder="Type a Message"
                        type="text"

                    />
                    <button onClick={handleSubmit} type='submit'>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
    
}
export default Chat


import React from 'react'
import "../css/sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton, Input } from '@material-ui/core';
import {Chat, MoreVert, SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='header'>
                <div className='header-avatar'>
                    <Avatar src={require('../asset/women/1.jpg')} />
                </div>
                <div className='header-icons'>
                    <IconButton>
                        <DonutLargeIcon  />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='header-search'>
                <div class='search-container'>
                    <SearchOutlined  />
                    <input class='search-input' placeholder='Start new chat' type='text' />
                </div>
            </div>
            <div className="sidebar-chat">
                <SidebarChat name='Josh' src={require("../asset/women/2.jpg")} />
                <SidebarChat name='Mike' src={require("../asset/women/4.jpg")} />
                <SidebarChat name='Mercy' src={require("../asset/women/5.jpg")} />
            </div>
        </div>
    )
}
export default Sidebar


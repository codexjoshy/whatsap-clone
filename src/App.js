import React, { useEffect, useState } from 'react';
import './App.css';
import  Chat  from './components/Chat';
import Sidebar  from './components/Sidebar';
import Pusher from 'pusher-js';
import axios from "./service/axios";

function App() {
  const [messages, setMessage] = useState([]);
  useEffect(() => {

    axios.get('/messages/')
      .then(res =>{
        setMessage(res.data)
      })
    return () => {
      
    }
  }, []);

  useEffect(() => {
    const pusher = new Pusher('0c177a8a7ec282d748b0', {
      cluster: 'eu'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      setMessage([...messages, newMessage])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])
  
  return (
    <div className="app">
      <div className="app-body">
        <Sidebar />
        <Chat messages = {messages} />
      </div>
      
    </div>
  );
}

export default App;

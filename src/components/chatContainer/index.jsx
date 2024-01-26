import React, { useContext, useEffect, useState } from 'react'
import './style.scss'
import ChatInput from './chatInput'
import ChatBox from './chatBox'
import { HelpContext } from '../../context/HelpContext'
import { useSocket } from '../../context/SocketContext'

const ChatContainer = () => {
  const { chats, setChats } = useContext(HelpContext);
  const socket = useSocket();

  useEffect(() => {
    if (socket) {
      // Example: Listen for events
      socket.on("chat message", (message) => {
        // Handle incoming message
        console.log("Received message:", message);
      });

      // Example: Emit an event
      socket.emit("chat massage", "Hello Server!");
    }
  }, [socket]);
  return (
    <div className='ChatContainer-container'>
      <div className="main-container">
        {chats.map((chat, i) => (
          <ChatBox key={i} chat={chat} />
        ))}
      </div>
      <div className="input-container">
        <ChatInput onSend={(input) => console.log(input)} />
      </div>
    </div>
  )
}

export default ChatContainer
import React from 'react'
import './style.scss'
import ChatInput from './chatInput'
import ChatBox from '../chatBox'

const ChatContainer = () => {
  return (
    <div className='ChatContainer-container'>
      <div className="main-container">
        <ChatBox />
      </div>
      <div className="input-container">
        <ChatInput onSend={(input) => console.log(input)} />
      </div>
    </div>
  )
}

export default ChatContainer
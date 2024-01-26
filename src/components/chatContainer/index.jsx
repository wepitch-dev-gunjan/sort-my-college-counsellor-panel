import React from 'react'
import './style.scss'
import ChatInput from './chatInput'

const ChatContainer = () => {
  return (
    <div className='ChatContainer-container'>
      <div className="main-container">

      </div>
      <div className="input-container">
        <ChatInput onSend={(input) => console.log(input)} />
      </div>
    </div>
  )
}

export default ChatContainer
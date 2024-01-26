import React, { useState } from 'react'
import './style.scss'
import ChatInput from './chatInput'
import ChatBox from './chatBox'

const ChatContainer = () => {
  const [chats, setChats] = useState([
    {
      text: "Hello welcome to sort my college",
      user: false
    },
    {
      text: "Wo sab thk h mera, mera login nhi ho rha hai",
      user: true
    },
    {
      text: "Sorry for your inconvinience. feel free to share your problem with us.",
      user: false
    },
    {
      text: "Problem 1 baar me smjh nhi aayi? hindi nhi aati?",
      user: true
    },
    {
      text: "Sorry for your inconvinience. We will get back to you soon.",
      user: false
    },
  ])
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
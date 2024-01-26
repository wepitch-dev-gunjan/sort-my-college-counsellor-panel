import React from 'react'
import './style.scss'

const ChatBox = ({ text }) => {

  return (
    <div className='ChatBox-container'>
      <p>
        {text}
      </p>
    </div>
  )
}

export default ChatBox

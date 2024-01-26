import { Tooltip } from '@mui/material';
import './style.scss';
import { MdOutlineChat } from "react-icons/md";
import { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import ChatContainer from '../../components/chatContainer';
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";

const Help = () => {

  const [chatEnable, setChatEnable] = useState(false);
 
  return (
    <div className='Help-container'>
      {chatEnable && <ChatContainer />}
      <div className="help-search">
        <h1>Welcome! How can we help?</h1>
        <div className="input">
        <input type="text" placeholder='Search'/>
        <IoMdSearch size={28}/>
        </div>
      </div>
      <div className="help-section">
        <div className="key-feature">
          <MdOutlineFeaturedPlayList size={60}/>
          <div className="feature-text">
          <h4>Key Features</h4>
          <p>Explore the fundamental of SMC.</p>
          </div>
        </div>
        <div className="faq">
          <FaQuestionCircle size={60} />
          <div className="feature-text">
          <h4>FAQ & Troubleshooting</h4>
          <p>Have a question? Find the answer here.</p>
        </div>
        </div>
        <div className="guide">
          <FaRegCompass size={60} />
          <div className="feature-text">
          <h4>Guide Center</h4>
          <p>Ideas and guide for SMC.</p>
        </div>
        </div>
      </div>
      <Tooltip title="Chat" placement='left'>
      <div className="chat-help" onClick={() => setChatEnable(prev => !prev)}>
        <MdOutlineChat size={32} color='white'/>
      </div>
      </Tooltip>
    </div>
  );
};

export default Help;
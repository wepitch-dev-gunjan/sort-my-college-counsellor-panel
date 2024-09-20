import { useContext, useState } from 'react'
import './style.scss'
import { HelpContext } from '../../context/HelpContext'
// import useClickOutside from '../../customHooks/useClickOutside'
import Image from '../../assets/Ask_Ques.jpg'
const AskQuestion = ({setAskQuestionDisable}) => {
    const {askQuestionRef} = useContext(HelpContext)

    // useClickOutside(askQuestionRef, () => setAskQuestionDisable(false));
   const [query,setQuery] = useState('');
   const resetQuery = (e)=>{
    setQuery(e.target.value);
   }
   const handleCancel=() =>{
    setQuery(' ');
   }
    return (
      <div className="ask-question-main">
        <div ref={askQuestionRef} className="ask-question-containers">
          {/* edited */}
          <div className="Ask_Ques_img">
            <img src={Image} alt="ask Question Image" />
          </div>
          <div className="ask_question_text">
            {/* <h4>Having Any questions ? Ask Here</h4> */}
            <h4>
              Have questions or need further assistance? Click the button below
              to send an email to our support team
            </h4>

            {/* <div className='ask-question-dropdown'> 
                    <select >
                        <option value="">Choose a category</option>
                        <option value="Counselor Services">Counselor Services</option>
                        <option value="Application Process">Application Process</option>
                        <option value="Financial Aid and Scholarships">Financial Aid and Scholarships</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Privacy and Security">Privacy and Security</option>
                        <option value="User Account Management">User Account Management</option>
                        <option value="Community Guidelines">Community Guidelines</option>
                        <option value="Additional Resources">Additional Resources</option>
                        <option value="Mobile App Support">Mobile App Support</option>
                        <option value="Video Tutorials and How-To Guides">Video Tutorials and How-To Guides</option>
                        <option value="Payment and Billing">Payment and Billing</option>
                        <option value="Account Termination/Deactivation">Account Termination/Deactivation</option>
                        <option value="Platform Updates and Announcements">Platform Updates and Announcements</option>
                        <option value="Accessibility Assistance">Accessibility Assistance</option>
                        <option value="Feedback and Suggestions">Feedback and Suggestions</option>
                        <option value="Webinar">Webinar</option>
                        <option value="other">Other</option>                        
                    </select>
                </div> */}
            {/* <div className="ask-question-textarea">
              <textarea
                placeholder="Type Your Query Here..."
                value={query}
                onChange={resetQuery}
              />
            </div> */}
            <div className="btn-container">
              {/* edited */}

              <div className="ask-question-btn">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=support@sortmycollege.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>EMAIL US</button>
                </a>
              </div>

              {/* <div className="ask-question-btn-cancel">
                <button onClick={handleCancel}>CANCEL</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
}

export default AskQuestion
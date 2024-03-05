import { useContext } from 'react'
import './style.scss'
import { HelpContext } from '../../context/HelpContext'
import axios from 'axios'
import { backend_url } from '../../config'
import { UserContext } from '../../context/UserContext'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ProfileContext } from '../../context/ProfileContext'


const DocumentDelete = ({documentDelete,setDocumentDelete}) => {
    const {askQuestionRef} = useContext(HelpContext)
    const { user } = useContext(UserContext);
    const { randomize } = useContext(ProfileContext);
    const navigate =useNavigate();
    const handlePopUp=()=>{
        setDocumentDelete(!documentDelete)
        navigate('/profile');
       
    }

    const handleDeleteDocument =  async () => {
        
        try {
          const currentPath = window.location.pathname;
          
          const documentId = currentPath.split("/profile/")[1];
          const { data } = await axios.delete(`${backend_url}/counsellor/document/${documentId}`,
            null,
            {
              headers: {
                Authorization: user.token
              }
            }
            )
            setDocumentDelete(!documentDelete)
            toast.success(data.message)
            randomize()
          console.log(currentPath.split("/profile/")[1]);
        } catch (error) {
          console.log(error)
        }
      }

    return(
        <div ref={askQuestionRef} className='ask-question-main'>
            <div className='ask-question-container'>
                <h3 className='h3'>Are You Sure You Want To Delete Selected Document</h3>
                    
                
                <div className='btn'>
                    <button onClick={handleDeleteDocument}>Yes</button>
                    <button onClick={handlePopUp}>No</button>

                </div>
            </div>
        </div>
    )
}

export default DocumentDelete
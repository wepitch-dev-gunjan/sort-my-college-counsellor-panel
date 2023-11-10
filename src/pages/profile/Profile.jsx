import Navbar from '../../components/navbar/Navbar'
import EditProfile from '../../components/editProfile';
import Sidebar from '../../components/sidebar/Sidebar'
import './profile.scss'
import { useState } from 'react';
import ProfileImages from '../../components/profileImages/ProfileImages';

const Profile = () => {
    // COde start for form 
    const userProfile = {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "followers_count": 0,
        "experience_in_years": 5,
        "total_sessions_attended": 0,
        "how_will_i_help": [],
        "qualifications": [
            "Sample Qualification 1",
            "Sample Qualification 2"
        ],
        "languages_spoken": [
            "English",
            "Hindi"
        ],
        "location": {
            "pin_code": 123456,
            "city": "Sample City",
            "state": "Sample State",
            "country": "Sample Country"
        },
        "gender": "Male",
        "age": null,
        "client_testimonials": [],
        "group_session_price": null,
        "personal_session_price": null
    };

    console.log(userProfile);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    // code end for form



    return (
        <div className="profile">
            <div className="profileContainer">
                <div className="formForProfile">
                    <ProfileImages />
                    <button onClick={openPopup}>Open Popup</button>
                    <button onClick={openPopup}>New Popup</button>

                    <EditProfile isOpen={isPopupOpen} onClose={closePopup} />
                </div>
            </div>
        </div>
    )
}


export default Profile
import React, {useState} from 'react'
import './style.scss'

const Users = () => {

  const [followers, setFollowers] = useState([
    {
      image: 'https://www.w3schools.com/howto/img_avatar2.png',
      service: 'Group session',
      date: '24 May 2024',
      followers: '$1,000',
      status: 'Active' // Corrected the typo here
    },
    {
      image: 'https://www.w3schools.com/howto/img_avatar.png',
      service: 'Group session',
      date: '24 May 2024',
      followers: '$1,000',
      status: 'Active'
    },
    {
      image: 'https://www.w3schools.com/howto/img_avatar.png',
      service: 'Group session',
      date: '24 May 2024',
      followers: '$1,000',
      status: 'Inactive'
    },
    {
      image: 'https://www.w3schools.com/howto/img_avatar2.png',
      service: 'Group session',
      date: '24 May 2024',
      followers: '$1,000',
      status: 'Inactive'
    }
  ]);
  return (
    <div className='Users-container'>
      <div className="business-dashbaord">
        <h1>My Followers</h1>
      </div>
    

      <div className="table">
        <div className="row">
          <div className="col"><h4>IMAGE</h4></div>
          <div className="col"><h4>NAME</h4></div>
          <div className="col"><h4>FOLLOW DATE</h4></div>
          <div className="col"><h4>FOLLOWER FROM</h4></div>
        </div>
        {followers.map((followers, i) => (
          <div className='row' key={i}>
            <div className='col'> <img className='followerImage' src={followers.image} /></div>
            <div className='col'>{followers.service}</div>
            <div className='col'>{followers.date}</div>
            <div className='col'>{followers.followers}</div>

          </div>
        ))}
      </div>
    </div>


  )
}

export default Users
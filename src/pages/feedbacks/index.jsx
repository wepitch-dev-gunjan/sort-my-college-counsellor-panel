import React, {useState} from 'react'
import "./style.scss"
// import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const Feedbacks = () => {


  const [feedbacks, setFeedbacks] = useState([
    {
      image: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Sahil Aziz',
      rating: '5',
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      
    },
    {
      image: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Sahil Aziz',
      rating: '5',
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      
    },
    {
      image: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Sahil Aziz',
      rating: '5',
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      
    },
    {
      image: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Kashish Sharma',
      rating: '4',
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      
    },
    {
      image: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Neeraj Rathore',
      rating: '3.5',
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      
    },
    {
      image: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Naman Choudhary',
      rating: '4.2',
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      
    },
    {
      image: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Gunjan Soral',
      rating: '2',
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      
    },
    
  ]);




  return (
    <div className='Feedbacks-container'>
      <div className="feedbacks-dashbaord">
        <h1>My Feedbacks</h1>
      </div>
      <div className="feedbacksBoxContainer">
        


{feedbacks.map((feedbacks, i) => (
        <div className="feedbacksBox">
            <div className="feebacksBoxUp">

                <div className="feedbacksImage">
                    <img src={feedbacks.image} alt="Test" />
                </div>
                <div className="feedbackUser">
                  <div className="feedbackUserTitle"> {feedbacks.name} </div>
                  <div className="feedbackUserRatings">
                  <Rating name="read-only" value={feedbacks.rating} readOnly />
                  </div>
                </div>
                
            </div>
            <div className="feebacksBoxDown">
            <div className="feedbacksComment">
{feedbacks.comment}
              
              </div>
            </div>
        </div>
 ))}
        


      </div>
    </div>
  )
}

export default Feedbacks
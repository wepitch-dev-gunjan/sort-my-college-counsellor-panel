import React, { useState } from "react";
import "./style.scss";
// import Box from '@mui/material/Box';
import Rating from "@mui/material/Rating";
import Feedback from "../../components/feedback";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      user_pic: "https://www.w3schools.com/howto/img_avatar2.png",
      user_name: "Sahil Aziz",
      rating: "5",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem hanged",
    },
    {
      user_pic: "https://www.w3schools.com/howto/img_avatar2.png",
      user_name: "Sahil Aziz",
      rating: "5",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
    {
      user_pic: "https://www.w3schools.com/howto/img_avatar2.png",
      user_name: "Sahil Aziz",
      rating: "5",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
    {
      user_pic: "https://www.w3schools.com/howto/img_avatar2.png",
      user_name: "Kashish Sharma",
      rating: "4",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
    {
      user_pic: "https://www.w3schools.com/howto/img_avatar2.png",
      user_name: "Neeraj Rathore",
      rating: "3.5",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
    {
      user_pic: "https://www.w3schools.com/howto/img_avatar2.png",
      user_name: "Naman Choudhary",
      rating: "4.2",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
    {
      user_pic: "https://www.w3schools.com/howto/img_avatar2.png",
      user_name: "Gunjan Soral",
      rating: "2",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
    {
      user_pic: "https://www.w3schools.com/howto/img_avatar2.png",
      user_name: "Gunjan Soral",
      rating: "2",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
  ]);

  return (
    <div className="Feedbacks-container">
      <div className="feedbacks">
        {feedbacks.map((feedback, i) => (
          <Feedback
            id={feedback._id}
            user_name={feedback.user_name}
            user_pic={feedback.user_pic}
            rating={feedback.rating}
            comment={feedback.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;

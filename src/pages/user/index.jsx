import React, { useState } from "react";
import "./style.scss";

const Users = () => {
  const [followers, setFollowers] = useState([
    {
      image: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Aman Sharma",
      email: "abc@gmail.com",
      follow_date: "24 May 2024",
    },
    {
      image: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Aman Sharma",
      email: "abc@gmail.com",
      follow_date: "24 May 2024",
    },
    {
      image: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Aman Sharma",
      email: "abc@gmail.com",
      follow_date: "24 May 2024",
    },
    {
      image: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Aman Sharma",
      email: "abc@gmail.com",
      follow_date: "24 May 2024",
    },
    {
      image: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Aman Sharma",
      email: "abc@gmail.com",
      follow_date: "24 May 2024",
    },
    {
      image: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Aman Sharma",
      email: "abc@gmail.com",
      follow_date: "24 May 2024",
    },
    {
      image: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Aman Sharma",
      email: "abc@gmail.com",
      follow_date: "24 May 2024",
    },
    {
      image: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Aman Sharma",
      email: "abc@gmail.com",
      follow_date: "24 May 2024",
    },
  ]);
  return (
    <div className="users-container">
      <div className="heading sticky">
        <h1>My Followers</h1>
        <div className="row">
          <div className="col">
            <h4>IMAGE</h4>
          </div>
          <div className="col">
            <h4>NAME</h4>
          </div>
          <div className="col">
            <h4>EMAIL</h4>
          </div>
          <div className="col">
            <h4>FOLLOW DATE</h4>
          </div>
        </div>
      </div>
      <div className="AllUsers-container">
        <div className="table">
          {followers.map((follower, i) => (
            <div className="row" key={i}>
              <div className="col">
                <img src={follower.image} alt="follower avatar" />
              </div>

              <div className="col">{follower.name}</div>
              <div className="col">{follower.email}</div>
              <div className="col">{follower.follow_date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;

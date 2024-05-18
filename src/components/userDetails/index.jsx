import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";
import config from "@/config";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const { backend_url } = config;

const UserDetails = () => {
  const [follower, setFollower] = useState({});
  const { user_id } = useParams();
  const { user } = useContext(UserContext);

  const getSingleUser = async () => {
    try {
      const { data } = await axios.get(
        `${backend_url}/counsellor/follower/user/${user_id}`,
        {
          headers: {
            Authorization: user.token,
          },
        }
      );
      console.log(data);
      setFollower(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleUser();
    console.log(user);
  }, [follower]);
  const generateAvatar = (follower) => {
    if (!follower.name) return "";
    const nameParts = follower.name.split("");
    const firstName = nameParts[0].charAt(0).toUpperCase();
    return `${firstName}`;
  };

  return (
    <div className="UserDetails-container">
      <div className="basic-info">
        <div className="user_image">
          {follower.profile_pic ? (
            <img
              style={{ border: "2px solid black" }}
              src={follower.user_image}
              alt=""
            />
          ) : (
            <div className="user-avatar">{generateAvatar(follower)}</div>
          )}
        </div>

        <div className="info">
          <div className="row">
            <div className="col">
              <div className="info-field">
                <p>Name </p>
              </div>
              <div className="info-value">
                <p>{follower.name}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="info-field">
                <p>Email </p>
              </div>
              <div className="info-value">
                <p>{follower.email}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="info-field">
                <p>Phone Number</p>
              </div>
              <div className="info-value">
                <p>{follower.phone_number}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="info-field">
                <p>Date of Birth</p>
              </div>
              <div className="info-value">
                <p>{follower.user_dob}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="info-field">
                <p>Gender</p>
              </div>
              <div className="info-value">
                <p>{follower.gender}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="info-field">
                <p>Level of Education</p>
              </div>

              <div className="info-value">
                <p>{follower.education_level}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

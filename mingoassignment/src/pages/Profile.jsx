// Dashboard.js
import React, { useEffect, useState } from "react";
import { getUserProfile } from "./loginapi";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import userbold  from '../../public/logoImg/userbold.svg'
import "./style.css";
import { ArrowOutwardRounded, BookOnline, ContactEmergency, Dashboard, Notes } from "@mui/icons-material";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserProfile();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='profilediv'>
      <div id='sidebar-links'>
        <div className='usericon'>
          <span>
            <img src={userbold} alt="" />
          </span>
          <div className="userName">
            <h3>JOHN</h3>
            CEO WebMingo
          </div>
        </div>
        <a href="#" class="active"><Dashboard/>Dashboard</a>
    <a href="#"><ContactEmergency/>Profile</a>
    <a href="#"><ArrowOutwardRounded/>Order</a>
    <a href="#"><BookOnline/>Mynotes</a>
    <button class="dropdown-btn"><i class="fas fa-caret-down"></i>Dropdown</button>
    <div class="dropdown-container">
      <a href="#">Dropdown Link 1</a>
      <a href="#">Dropdown Link 2</a>
      <a href="#">Dropdown Link 3</a>
    </div>
      </div>
    </div>
  );
};

export default Profile;

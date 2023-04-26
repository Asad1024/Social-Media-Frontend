import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import RightImage from "../../assets/1.jpeg";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <div className="logo">
          <span className="logo">Socialapp</span>
        </div>
      </div>
      <div className="topBarCenter">
        <div className="topBarCenterItems">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="Search person,post or video"
            className="searchBox"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarRightItems">
          <div className="topBarRightLinks">
            <span className="topBarLinks">Home</span>
            <span className="topBarLinks">Timeline</span>
          </div>
          <div className="topBarRightIcons">
            <div className="topBarRightIconsItem">
              <PersonIcon className="rightIcons" />
              <div className="badge">1</div>
            </div>
            <div className="topBarRightIconsItem">
              <ChatIcon className="rightIcons" />
              <div className="badge">2</div>
            </div>
            <div className="topBarRightIconsItem">
              <NotificationsIcon className="rightIcons" />
              <div className="badge">1</div>
            </div>
          </div>
          <div className="topBarRightImage">
            <img src={RightImage} alt="" className="rightImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

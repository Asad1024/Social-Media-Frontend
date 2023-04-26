import React from "react";
import "./online.css";

const Online = ({ user }) => {
  return (
    <div className="onlineFriend">
      <ul className="onlineFriendList">
        <li className="onlineFriendLists">
          <div className="onlineProfile">
            <img
              src={user.profilePicture}
              alt=""
              className="rightBarBottomImage"
            />
            <div className="onlineBadge"></div>
          </div>
          <div className="onlineName">
            <span className="rightBarBottomText">{user.username}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Online;

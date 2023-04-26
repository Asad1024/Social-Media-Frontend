import React from "react";
import "./friend.css";

const Friends = ({ user }) => {
  return (
    <div className="sideBarFriendContainer">
      <ul className="sideBarFriendList">
        <li className="sideBarFriendLists">
          <img src={user.profilePicture} alt="" className="sideBarFriendImg" />
          <span className="sideBarFriendName">{user.username}</span>
        </li>
      </ul>
    </div>
  );
};

export default Friends;

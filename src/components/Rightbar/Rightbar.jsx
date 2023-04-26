import React from "react";
import "./rightbar.css";
import Gift from "../../assets/gift.png";
import Ad from "../../assets/ad.png";
import { Users } from "../../dummyData";
import Online from "../Online/Online";

const Rightbar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="rightBarTop">
          <div className="rightBarTopItems">
            <img src={Gift} alt="" className="rightBarTopImage" />
            <span className="rightBarTopText">
              <b>Adam Johnson</b> and <b>3 other friends</b> have a birthday
              today
            </span>
          </div>
        </div>
        <div className="rightBarCenter">
          <img src={Ad} alt="" className="rightBarCenterImage" />
        </div>
        <div className="rightBarBottom">
          <span className="rightBottomText">Online Friends</span>
          <div className="rightBottomItems">
            {Users.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </div>
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarContainer">
        {profile ? <ProfileRightbar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;

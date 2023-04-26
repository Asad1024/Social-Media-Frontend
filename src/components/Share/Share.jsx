import React from "react";
import "./share.css";
import ShareTopImg from "../../assets/1.jpeg";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Share = () => {
  return (
    <div className="share">
      <div className="shareContainer">
        <div className="shareContainerTop">
          <img src={ShareTopImg} alt="" className="shareTopImage" />
          <input
            type="text"
            placeholder="What's in your mind Sara?"
            className="shareTopInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareContainerBottom">
          <div className="shareIcon">
            <div className="shareIcons">
              <PermMediaIcon htmlColor="tomato" className="shareBottomIcons" />
              <span>Photo or Video</span>
            </div>
            <div className="shareIcons">
              <LabelIcon htmlColor="blue" className="shareBottomIcons" />
              <span>Tag</span>
            </div>
            <div className="shareIcons">
              <LocationOnIcon htmlColor="Green" className="shareBottomIcons" />
              <span>Location</span>
            </div>
            <div className="shareIcons">
              <EmojiEmotionsIcon
                htmlColor="Goldenrod"
                className="shareBottomIcons"
              />
              <span>Feelings</span>
            </div>
          </div>
          <div className="shareButton">
            <button className="shareBtn">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;

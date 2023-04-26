import React from "react";
import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import SchoolIcon from "@mui/icons-material/School";
import Friends from "../Friends/Friends";
import { Users } from "../../dummyData";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarContainerItems">
        <ul className="sideBarItem">
          <li className="sideBarItems">
            <RssFeedIcon className="sideBarIcon" />
            <span className="sideBarText">Feed</span>
          </li>
          <li className="sideBarItems">
            <ChatIcon className="sideBarIcon" />
            <span className="sideBarText">Chat</span>
          </li>
          <li className="sideBarItems">
            <PlayCircleIcon className="sideBarIcon" />
            <span className="sideBarText">Videos</span>
          </li>
          <li className="sideBarItems">
            <GroupIcon className="sideBarIcon" />
            <span className="sideBarText">Groups</span>
          </li>
          <li className="sideBarItems">
            <BookmarkIcon className="sideBarIcon" />
            <span className="sideBarText">Bookmarks</span>
          </li>
          <li className="sideBarItems">
            <HelpOutlineIcon className="sideBarIcon" />
            <span className="sideBarText">Questions</span>
          </li>
          <li className="sideBarItems">
            <WorkOutlineIcon className="sideBarIcon" />
            <span className="sideBarText">Jobs</span>
          </li>
          <li className="sideBarItems">
            <InsertInvitationIcon className="sideBarIcon" />
            <span className="sideBarText">Events</span>
          </li>
          <li className="sideBarItems">
            <SchoolIcon className="sideBarIcon" />
            <span className="sideBarText">Courses</span>
          </li>
        </ul>
        <button className="sideBarBtn">Show More</button>
        <hr className="sideBarHr" />
        {Users.map((u) => (
          <Friends key={u.id} user={u} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

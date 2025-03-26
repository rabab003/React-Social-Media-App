import "./profile.css";
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from "../../Components/SideBar/SideBar";
import Feed from "../../Components/Feed/Feed";
import Rightbar from "../../Components/RightBar/Rightbar";


import React from 'react'

export default function profile() {
  return (
    <div>
            <Topbar/>
            <div className="profile">
             <Sidebar/>
             <div className="profileRight">
              <div className="profileRightTop">
                <img src="profileCover" alt="" />
              </div>

              <div className="profileRightBottom">
             <Feed/>
             <Rightbar/>                
              </div>
             </div>

             </div>
    </div>
  )
}

import "./Rightbar.css";
import {Users} from "../../dummyData"
import Online from "../online/Online";

export default function Rightbar(){
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/public/assets/gift.png" className="birthdayImg" alt="" />
                    <span className="birthdayText">
                       <b> pola foster and 3 friends</b> have a birthday today
                    </span>
                </div>
                <img src="/public/assets/ad.png" className="rightbarAd" alt="" />
                <h4 className="rightbarTitle">Online Friend</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}

                </ul>

            </div>
        </div>
    )
}


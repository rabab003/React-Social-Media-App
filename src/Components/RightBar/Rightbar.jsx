import "./Rightbar.css";

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
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="/public/assets/person/7.jpeg" className="rightbarProfileImg" alt="" />
                            <span className="rightbaronline"></span>
                        </div>
                        <span className="rightbarUsername">John Carter</span>
                    </li>
                </ul>

            </div>
        </div>
    )
}
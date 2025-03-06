import "./Sidebar.css";
import { RssFeed , Chat , VideoCall, Group , Bookmark, Event, QuestionMark} from "@mui/icons-material";

export default function SideBar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>  
                    </li>

                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>

                    </li>
                    <li className="sidebarListItem">
                        <VideoCall className="sidebarIcon"/>
                        <span className="sidebarListItemText">videos</span>

                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>

                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>

                    </li>
                    <li className="sidebarListItem">
                        <QuestionMark className="sidebarIcon"/>
                        <span className="sidebarListItemText">questions</span>

                    </li>
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">jobs</span>

                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">events</span>

                    </li>
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">courses</span>

                    </li>
                </ul>

                <button className="sidebarButton">show more</button>
                <hr  className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/3.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/4.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/5.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/6.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/7.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/8.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/9.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/10.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/1.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/3.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/4.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/5.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/6.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/7.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/public/assets/person/8.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
import './topbar.css';
import { Search, Person, Chat,Notifications } from '@mui/icons-material';
export default function Topbar(){
    return(
        <div className='topbarContainer'>

            <div className='topbarLeft'>
                <span className='logo'>LamaSocial</span>
            </div>
            <div className='topbarCenter'>
                <div className='searchbar'>
                    <Search className='searchIcon'/>
                    <input className='searcInput' placeholder='Search for friend, post or video' />
                    
                </div>
            </div>
            <div className='topbarRight'>
                <div className="topbarLinks">
                    <span className='topbarLink'>Homepage</span>
                    <span className='topbarLink'>Timeline</span>
                </div>

                <div className='topbarIcons'>
                    <div className="topbarIconItems">
                        <Person/>
                        <span className='topbarIconBadge'>1</span>

                    </div>
                    <div className="topbarIconItems">
                        <Chat/>
                        <span className='topbarIconBadge'>1</span>

                    </div>
                    <div className="topbarIconItems">
                        <Notifications/>
                        <span className='topbarIconBadge'>1</span>

                    </div>
                </div>

                <img src='/public/assets/person/1.jpeg' className='topbarImg' alt="" />
            </div>
            
        </div>
    )
}
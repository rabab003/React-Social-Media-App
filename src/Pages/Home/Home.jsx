import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from "../../Components/SideBar/SideBar";
import Feed from "../../Components/Feed/Feed";
import Rightbar from "../../Components/RightBar/Rightbar";
import "./Home.css";



export default function Home(){
    return(
        <div className='container'>
            <Topbar/>

            <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
            </div>

        </div>
    )
}
import "./Post.css";
import { MoreVert } from "@mui/icons-material";

export default function Post(){
    return(
        <>
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/public/assets/person/1.jpeg" className="postProfileImg" alt="" />
                        <span className="postUsername">rabix-02</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>

                </div>
                <div className="postCenter">
                    <span className="postText">Hey this is my first post !</span>
                    <img className="postImg" src="/public/assets/post/1.jpeg" alt="" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/public/assets/like.png" className="likeIcon" alt="" />
                        <img src="/public/assets/heart.png" className="likeIcon" alt="" />
                        <span className="postLikeCounter">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>

                    </div>

                </div>

            </div>

        </div>

        
        </>
    )
}
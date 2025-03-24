import "./Post.css";
import { MoreVert } from "@mui/icons-material"; 
 import { Users } from "../../dummyData";

export default function Post({post}){
    const user = Users.filter(u=>u.id ===1)
    console.log(user)
    return(
        <>
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/public/assets/person/1.jpeg" className="postProfileImg" alt="" />
                        <span className="postUsername">{post.id}</span>
                        <span className="postDate">{post?.date} min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>

                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/public/assets/like.png" className="likeIcon" alt="" />
                        <img src="/public/assets/heart.png" className="likeIcon" alt="" />
                        <span className="postLikeCounter">{post.like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>

                    </div>

                </div>

            </div>

        </div>

        
        </>
    )
}

// 1:29:19 min
import "./Post.css";
import { MoreVert } from "@mui/icons-material"; 
 import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({post}){
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler =()=>{
        setLike(isLiked? like-1 : like+1);
        setIsLiked(!isLiked)
    }
    return(
        <>
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u)=> u.id=== post?.userId)[0].profilePicture} className="postProfileImg" alt="" />
                       
                        <span className="postUsername">
                     {Users.filter((u)=> u.id === post.userId)[0].profilePicture}

                        </span>
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
                        <img src="/public/assets/like.png" className="likeIcon" onClick={likeHandler} />
                        <img src="/public/assets/heart.png" className="likeIcon" onClick={likeHandler} alt="" />
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

// 1:42:30 profile page section
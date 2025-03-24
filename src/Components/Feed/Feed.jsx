import './Feed.css';
import Share from "../Share/Share";
import Posts from "./dummyData"; 
import Post from "./Post"; 

export default function Feed(){
    return(
        <> 
        <div className='feed'>
            <div className="feedWrapper">
                <Share/>
                {Posts.map(post => (
                   <Post key={post.id} post={post} />
                ))}
                <Post/>
            </div>
            
        </div>
        
        </>
    )
}
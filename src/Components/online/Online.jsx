import "./online.css"

export default function Online({user}) {
  return (
    <>

  <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
          <img src={user.profilePicture} className="rightbarFollowingImg" alt="" />
          <span className="rightbaronline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
  </li>
      
    </>
  )
}

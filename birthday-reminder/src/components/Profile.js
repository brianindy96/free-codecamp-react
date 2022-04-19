import React from 'react'
import "./Profile.css"

const Profile = ({ task }) => {
  return (
    <div className="profile-con">
        <div className="profile-pic">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Person#1"/>
        </div>
        <div className="profile-info">
            <div className="profile-name">
                <p>{task.name}</p>
            </div>
            <div className="profile-age">

            </div>
        </div>
    </div>
  )
}

export default Profile
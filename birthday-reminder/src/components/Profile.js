import React from 'react'
import "./Profile.css"

const Profile = ({ lists }) => {
  return (
    <>
    {lists.map((list) => (
        <li key={list.id} className="list-item">
            <div className="left-con">
                <div className="img-container">
                    <img src={list.image} alt="profile image"></img>
                </div>
            </div>
            <div className="profile-info">
                <h3>{list.name}</h3>
                <p>{list.age}</p>
            </div>
        </li>
    ))}
    </>
  )
}

export default Profile
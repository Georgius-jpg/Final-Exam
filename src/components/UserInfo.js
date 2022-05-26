import React from 'react'
import {  useNavigate } from "react-router-dom";


function UserInfo({  title, picture, user, handleClick }) {
    const navigate = useNavigate();

    return (
        <div className='user-container'>
            <h4>{title}</h4>
            <img src={picture} alt={title} />
            <button 
            onClick={()=> handleClick(user)}
            className="button">ADD TO FAVORITES</button>
                  <button
          className="button"
          onClick={() => {
            navigate("/dashboard");
          }}
        >GO TO DASHBOARD  </button>
        </div>
    )
}

export default UserInfo
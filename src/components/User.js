import React from "react";
import { Link } from "react-router-dom";
function User({ user }) {
  const { avatar_url, login, id } = user;
  return (
    <div className="user">
      <div className="image">
        <img src={avatar_url} alt={""} />
      </div>
      <div className="user-info">
        <h3>{login}</h3>
        <h3>{id}</h3>
        <Link to={`/user/${id}`}>View Profile</Link>
      </div>
    </div>
  );
}

export default User;

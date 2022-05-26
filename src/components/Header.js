import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Header() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-items">
        <div>
          <img
            src="https://www.pngkey.com/png/full/178-1787508_github-icon-download-at-icons8-white-github-icon.png"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div>
          <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/search">Search</Link>
            <Link to={"/signin"}>
              {" "}
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;

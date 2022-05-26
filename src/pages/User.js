// import React, {useState, useEffect} from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";

function User() {
  // const [fav, setFav] = useState( [])
  const { id } = useParams();
  const { loading, posts } = useContext(AppContext);
  const user = posts.find((item) => item.id === +id);
  // const [userInfo, setUserInfo] = useState([])
  const { name } = useParams()

  const handleClick = (user) => {
    console.log(user)
  }

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${name}`)
  //     .then((response) => response.json())
  //     .then((data) => setUserInfo(data));
  // }, []);
  // console.log(userInfo) // არ მუშაობს


  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (!loading && !user) {
    return (
      <div>
        <Header />
        <h1>User with {id} Has less than 1000 Follower</h1>
      </div>
    );
  }

  //
  return (
    <div>
      <Header />
      <div>
        <UserInfo
          handleClick={handleClick}
          key={user.id}
          title={user.login}
          picture={user.avatar_url}
          alt=" "
          id={user.id}
        />
      </div>
    </div>
  );
}

export default User;




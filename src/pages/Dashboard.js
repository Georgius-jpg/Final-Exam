import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import React from "react";
import Header from "../components/Header";
import PostItem from "../components/postItem";
function Dashboard() {
  const { posts, loading, error } = useContext(AppContext);
  const [visible, setVisible] = useState(20);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 20);
  };
  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div>
      <Header />
      <div className="postItem">
        <div className="posts">
          {posts.slice(0, visible).map((user) => {
            return (
              <PostItem
                key={user.id}
                title={user.login}
                picture={user.avatar_url}
                alt=" "
                id={user.id}
              />
            );
          })}
          {error && <h3>{error}</h3>}
          <button onClick={showMoreItems} className="btn">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

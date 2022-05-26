import React from "react";
import { useState } from "react";
import axios from "../axios";
import User from "../components/User";
import Header from "../components/Header";
function Search() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("/search/users?q=" + query);
      return data?.items;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleSearchUsers = async (e) => {
    e.preventDefault();
    if (query) {
      const items = await fetchUsers();
      setUsers(items);
    } else {
      console.log("your query is empty");
    }
  };

  return (
    <div className="search-container">
      <Header />
      <div className="search-form">
        <h1>Search GitHub User</h1>
        <form>
          <input value={query} onChange={handleQueryInput} type="text" />
          <button className="btn" onClick={handleSearchUsers}>
            Search
          </button>
        </form>
      </div>
      <div className="search-results">
        {users ? (
          users.map((user) => {
            return <User user={user} key={user.id} />;
          })
        ) : (
          <h2>There is nothing to display...</h2>
        )}
      </div>
    </div>
  );
}

export default Search;

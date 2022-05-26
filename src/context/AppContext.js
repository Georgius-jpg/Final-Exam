import { createContext, useState, useEffect } from "react";
import getPosts from "../http/getPosts";

const AppContext = createContext({ loading: false, error: "", posts: [] });

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then((response) => setPosts(response))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AppContext.Provider value={{ loading, error, posts, setPosts }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };

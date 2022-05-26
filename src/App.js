import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { AppContextProvider } from "./context/AppContext";
import Routes from "./Routes";
import getPosts from "./http/getPosts";
function App() {
  const state = useContext(AuthContext);
  console.log(state);
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
    <AppContextProvider>
      <main className="container">
        <Routes posts={{ loading, error, data: posts }} />
      </main>
    </AppContextProvider>
  );
}

export default App;

import axios from "axios";

API_URL = "https://api.github.com";
async function getPosts() {
  try {
    const response = await axios.get(
      `${API_URL}/users?q=followers:>=1000&per_page=135`
    );
    // const response = await axios.get(`https://api.github.com/users/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);

    throw new Error("Something went wrong, while fetching users");
  }
}

export default getPosts;
// https://api.github.com/users?q=followers:>=1000&per_page=1000
// https://api.github.com/users/torvalds

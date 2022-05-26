import { Link } from "react-router-dom";

function PostItem({ id, title, picture }) {
  return (
    <div>
      <h4>{title}</h4>
      <img src={picture} alt={title} />
      <Link to={`/user/${id}`}>
        {" "}
        <button className="btn">Read More</button>{" "}
      </Link>

    </div>
  );
}

export default PostItem;

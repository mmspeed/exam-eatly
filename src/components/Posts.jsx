import React, { useState } from "react";
import Dish from "../assets/dishesImg.png";

const Posts = ({ posts, loading }) => {
  const [query, setQuery] = useState("");

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <>
      <div className="searchHelp">
        <div className="searchFor">
          <input
            type="text"
            placeholder="Search..."
            className="searchL"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <h6 className="notSuit">
          (If there is no suitable dish in the search, look at the other
          pagination tabs !)
        </h6>
      </div>
      <ul className="list-group mb-4">
        {posts
          .filter((post) => post.title.toLowerCase().includes(query))
          .map((post) => (
            <li key={post.id} className="list-group-item">
              <img src={Dish} alt="" />
              {post.title}
              <button className="dishPrice">$12.99</button>
              <button className="dishesAdds">+</button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;

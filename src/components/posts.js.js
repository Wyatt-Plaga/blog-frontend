import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "https://serverless-api.wyattplaga.workers.dev/api/posts"
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1>News Feed</h1>
      {posts.map((post) => (
        <div key={post.id}>
	<h1> <Link to={`/posts/${post.id}`}>{'Make Post'}</Link> </h1>
          <h2>
            <Link to={`/posts/${post.id}`}>{post.title}</Link> <small> -{post.author} </small>
          </h2>
	<p>{post.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
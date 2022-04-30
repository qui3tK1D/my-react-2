import Post from "./components/Post";
import { useState, useEffect } from "react";
import AddPost from "./components/AddPost";

function App() {
  const [posts, setPosts] = useState([]);

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myposts"));
    if (data) setPosts(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("myposts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="row justify-content-center g-3">
      <AddPost addPost={addNewPost} />
      <Post posts={posts} />
    </div>
  );
}

export default App;

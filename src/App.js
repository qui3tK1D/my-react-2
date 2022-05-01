import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import PostDetail from "./components/PostDetail";

function App() {
  const [posts, setPosts] = useState([]);
  // const [card, setCards] = useState(0);

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myposts"));
    // console.log("json", data);
    if (data?.length !== 0 && data) setPosts(data);
    // console.log("get", posts);
  }, []);

  useEffect(() => {
    // setCards((x) => x + 1);
    // console.log("depen", { posts });
    localStorage.setItem("myposts", JSON.stringify(posts));
  }, [posts]);

  // console.log("posts  ", posts, { card });

  const postDelete = (id) => {
    setPosts(posts.filter((cur) => cur.id !== id));
  };

  return (
    <div className="row justify-content-center g-3">
      <Router>
        <Routes>
          <Route path="/add" element={<AddPost addPost={addNewPost} />}></Route>
          <Route
            path="/"
            element={<Post posts={posts} onDelete={postDelete} />}
          ></Route>
          <Route path="/post/:id" element={<PostDetail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

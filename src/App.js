import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import PostDetail from "./components/PostDetail";
import EditPost from "./components/EditPost";

function App() {
  const [posts, setPosts] = useState([]);

  const LOCAL_HOST = "http://localhost:9000";

  //send data to json server
  const addNewPost = async (newPost) => {
    await fetch(`${LOCAL_HOST}/posts`, {
      method: "POST",
      body: JSON.stringify({
        title: newPost.title,
        desc: newPost.desc,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    setPosts([newPost, ...posts]);
  };

  const postDelete = async (id) => {
    await fetch(`${LOCAL_HOST}/posts/${id}`, { method: "DELETE" });
    setPosts(posts.filter((cur) => cur.id !== id));
  };

  const postUpdate = async (post) => {
    console.log(post);
    setPosts(posts.map((cur) => (cur.id === post.id ? post : cur)));
    await fetch(`${LOCAL_HOST}/posts/${post.id}`, {
      method: "PATCH",
      body: JSON.stringify(post),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  //get data from json server initial
  useEffect(() => {
    (async () => {
      try {
        const posts = await (await fetch(`${LOCAL_HOST}/posts`)).json();
        setPosts(posts);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

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
          <Route
            path="/editpost/:id"
            element={<EditPost update={postUpdate} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

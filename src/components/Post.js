import { Component } from "react";
import PostCard from "./PostCard";

class Post extends Component {
  render() {
    return (
      <div className="col-xl-6">
        <div className="row g-3">
          {this.props.posts.map((cur) => {
            return <PostCard key={cur.id} data={cur} />;
          })}
        </div>
      </div>
    );
  }
}

export default Post;

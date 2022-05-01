import { Component } from "react";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

class Post extends Component {
  render() {
    return (
      <div className="col-xl-6">
        <div className="row g-3">
          <div>
            <div className="card bg-light border-0 shadow-sm overflow-hidden">
              <div className="card-header border-0">
                <span className="d-flex align-items-center justify-content-between text-primary">
                  Add New Post
                  <Link to="/add">
                    <button className="btn btn-sm btn-outline-primary">
                      <i className="d-flex fa fa-circle-plus"></i>
                    </button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          {this.props.posts.map((cur) => {
            return (
              <PostCard
                key={cur.id}
                data={cur}
                onDelete={this.props.onDelete}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Post;

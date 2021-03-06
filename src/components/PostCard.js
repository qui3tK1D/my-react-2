import { Component } from "react";
import user1 from "../images/user.jpg";
import { Link } from "react-router-dom";

class PostCard extends Component {
  render() {
    return (
      <div>
        <div className="card bg-light border-0 shadow-sm">
          <div className="card-body">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <img
                  src={user1}
                  alt="user"
                  style={{ width: "72px", height: "72px" }}
                ></img>
              </div>

              <div className="col">
                <h4>{this.props.data.title}</h4>
                <h5>{this.props.data.desc}</h5>
              </div>

              <div className="col-auto d-flex gap-3">
                <Link
                  to={`/post/${this.props.data.id}`}
                  state={this.props.data}
                >
                  <button className="btn btn-sm btn-primary shadow-sm">
                    <i className="fa fa-eye"></i>
                  </button>
                </Link>
                <Link
                  to={`/editpost/${this.props.data.id}`}
                  state={this.props.data}
                >
                  <button className="btn btn-sm btn-light shadow-sm">
                    <i className="fa fa-edit"></i>
                  </button>
                </Link>
                <button
                  className="btn btn-sm btn-danger shadow-sm"
                  onClick={() => this.props.onDelete(this.props.data.id)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// /post/:id

export default PostCard;

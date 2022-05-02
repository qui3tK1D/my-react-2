import { Component } from "react";
import user1 from "../images/user.jpg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

class PostDetail extends Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card border-0 shadow-sm">
          <img src={user1} className="card-img-top img-fluid" alt="useimg" />
          <div className="card-body">
            <h5 className="card-title">{this.props.data.title}</h5>
            <p className="card-text">{this.props.data.desc}</p>
            <Link to="/">
              <button className="btn btn-primary">
                <i className="fa fa-arrow-left"></i> Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default () => {
  const { state } = useLocation();
  return <PostDetail data={state} />;
};

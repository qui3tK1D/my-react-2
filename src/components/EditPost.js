import { Component } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

class EditPost extends Component {
  state = this.props.data;
  updatePost(e) {
    e.preventDefault();
    this.props.update(this.state);
    this.setState({ title: "", desc: "" });
    this.props.navigate("/");
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleChangeDesc(e) {
    this.setState({ desc: e.target.value });
  }

  render() {
    return (
      <div className="col-xl-6">
        <div className="row g-3">
          <div>
            <div className="card bg-light border-0 shadow-sm overflow-hidden">
              <div className="card-header border-0">
                <span className="d-flex align-items-center justify-content-between text-primary">
                  View Post
                  <Link to="/">
                    <button className="btn btn-sm btn-outline-primary">
                      <i className="d-flex fa fa-list"></i>
                    </button>
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="card bg-light border-0 shadow-sm overflow-hidden">
              <div className="card-body">
                <form
                  onSubmit={this.updatePost.bind(this)}
                  action=""
                  className="row g-3 justify-content-end"
                >
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      placeholder="Post Title"
                      type="text"
                      value={this.state.title}
                      onChange={this.handleChangeTitle.bind(this)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      placeholder="Post Description"
                      type="text"
                      value={this.state.desc}
                      onChange={this.handleChangeDesc.bind(this)}
                    />
                  </div>

                  <div className="col-auto">
                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (props) => {
  //this props is from props of app.js compo
  const { state } = useLocation();
  const navigator = useNavigate();

  return <EditPost {...props} data={state} navigate={navigator} />;
};

import { Component } from "react";
import { v4 as id } from "uuid";

class AddPost extends Component {
  state = {
    title: "",
    desc: "",
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.addPost({ id: id(), ...this.state });
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
        <div className="card bg-light border-0 shadow-sm">
          <div className="card-header">
            <span className="d-flex align-items-center gap-2 text-primary fs-5">
              Add New Post
              <i className="fa fa-circle-plus"></i>
            </span>
          </div>
          <div className="card-body">
            <form
              onSubmit={this.handleSubmit.bind(this)}
              action=""
              className="row g-3 justify-content-end"
            >
              <div className="col-md-6">
                <input
                  className="form-control"
                  placeholder="Post Title"
                  type="text"
                  onChange={this.handleChangeTitle.bind(this)}
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form-control"
                  placeholder="Post Description"
                  type="text"
                  onChange={this.handleChangeDesc.bind(this)}
                />
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPost;

{
  /* <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tele"
                  className="form-control"
                  placeholder="09-0000"
                  id="phone"
                  onChange={handleChangePhone}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="cell" className="form-label">
                  Cell
                </label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="09-1111"
                  id="cell"
                  onChange={handleChangeCell}
                />
              </div>
              <div className="col-md-12">
                <label className="form-label" htmlFor="image">
                  Image Url
                </label>
                <input
                  className="form-control"
                  placeholder="https://..."
                  type="text"
                  id="image"
                  onChange={handleChangeImage}
                />
              </div> */
}

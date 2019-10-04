import React, { Component } from "react";

class BlogHome extends Component {
  styles = {
    main: {
      padding: "15px 0"
    },
    container: {
      border: "1px solid rgba(0,0,0,0.1)",
      zIndex: 3,
      backgroundColor: "rgba(0,0,0,0.05)"
    }
  };

  render() {
    return (
      <React.Fragment>
        <main className="main" style={this.styles.main}>
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                <div className="blog-feed" style={this.styles.container}>
                  <h1>Blog Feed</h1>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="categories" style={this.styles.container}>
                  <h2>Categories</h2>
                </div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default BlogHome;

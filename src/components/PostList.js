import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserDetails from "./UserDetails";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderedList() {
    return this.props.posts.map((post) => {
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user'></i>
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserDetails userId={post.userId}></UserDetails>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return <div className='ui relaxed divided list'>{this.renderedList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostList);

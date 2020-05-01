import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserDetails extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const userf = this.props.user.find((user) => user.id === this.props.userId);
    if (!userf) {
      return null;
    }
    return <div className='header'>{userf.name}</div>;
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps, { fetchUser: fetchUser })(UserDetails);

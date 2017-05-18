import React, { Component } from 'react';


class UserListItem extends Component {

  render() {
    console.log("props: ",this.props);
    return (
      <div className="UserListItem">
        {this.props.name}
      </div>
    );
  }
}

export default UserListItem;

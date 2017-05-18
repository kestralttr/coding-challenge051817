import React, { Component } from 'react';


class UserListItem extends Component {

  render() {
    return (
      <div className="UserListItem">
        <div className="checkbox-section">
          <input className="checkbox" type="checkbox"/>
        </div>
        <div className="text-section">
          <div className="name-section">
            {this.props.name}
          </div>
          <div className="email-section">
            {this.props.email}
          </div>
        </div>
      </div>
    );
  }
}

export default UserListItem;

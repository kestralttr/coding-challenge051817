import React, { Component } from 'react';
import UserListItem from './UserListItem';
import $ from "jquery";

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.renderInitialUsers = this.renderInitialUsers.bind(this);
  }

  renderInitialUsers() {
    if(this.state.users) {
      this.state.users.forEach(function(user) {
        return(
          <li>hello</li>
        );
      });
    }
  }

  componentDidMount() {
    $.ajax({
      method:"GET",
      url:"https://jsonplaceholder.typicode.com/users",
      success: (data) => {
        this.setState({
          users:data
        }, () => {

        });
      }
    });
  }

  render() {
    let userItems;
    if(this.state.users) {
      userItems = this.state.users.map(function(user) {
        return(
          <UserListItem name={user.name} />
        );
      });
    }
    return (
      <div className="UserList">
        {userItems}
      </div>
    );
  }
}

export default UserList;

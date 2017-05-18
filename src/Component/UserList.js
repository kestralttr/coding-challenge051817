import React, { Component } from 'react';
import UserListItem from './UserListItem';
import $ from "jquery";

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
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

    // callback for sorting users alphabetically by name
    function compare(a,b) {
      if((a.name[0]).toLowerCase() < (b.name[0]).toLowerCase()) {
        return -1;
      }
      if((a.name[0]).toLowerCase() > (b.name[0]).toLowerCase()) {
        return 1;
      }
      return 0;
    }

    let userItems;
    let sortedUserItems;
    if(this.state.users) {
      userItems = this.state.users.sort(compare);
      sortedUserItems = userItems.map(function(user) {
        return(
          <UserListItem key={user.id} name={user.name} email={user.email} />
        );
      });
    }
    return (
      <div className="UserList">
        {sortedUserItems}
      </div>
    );
  }
}

export default UserList;

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
    let url = "https://jsonplaceholder.typicode.com/users";
    $.ajax({
      method:"GET",
      url: url,
      success: (data) => {

        // compare function for sorting users alphabetically by name
        function compare(a,b) {
          if((a.name[0]).toLowerCase() < (b.name[0]).toLowerCase()) {
            return -1;
          }
          if((a.name[0]).toLowerCase() > (b.name[0]).toLowerCase()) {
            return 1;
          }
          return 0;
        }

        // state is set with sorted data
        this.setState({
          users:data.sort(compare)
        });
      },
      error: (error) => {
        alert("An error occurred accessing the API at the following URL: " + url);
      }
    });
  }

  render() {
    let userItems;
    if(this.state.users) {
      userItems = this.state.users.map(function(user) {
        return(
          <UserListItem key={user.id} name={user.name} email={user.email} />
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

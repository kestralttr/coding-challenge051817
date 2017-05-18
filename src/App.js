import React, { Component } from 'react';
import $ from "jquery";
import UserList from './Component/UserList';
import './master.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let names = [];
    let checkedBoxes = $(".checkbox:checked").parent().parent().find(".name-section");
    Array.prototype.forEach.call(checkedBoxes,function(el) {
      names.push(el.innerHTML);
    });
    console.log(names);
  }

  render() {
    return (
      <div className="App">
        <h1>User List</h1>
        <UserList />
        <button className="confirm-button" onClick={this.handleClick}>Confirm</button>
      </div>
    );
  }
}

export default App;

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
    this.handleClose = this.handleClose.bind(this);
    this.handleUncheckAll = this.handleUncheckAll.bind(this);
  }

  handleClick() {
    let names = [];
    let checkedNameSections = $(".checkbox:checked").parent().parent().find(".name-section");
    Array.prototype.forEach.call(checkedNameSections,function(el) {
      names.push(el.innerHTML);
      $(".results").append(`<p>${el.innerHTML}</p>`);
    });

    $(".results-container").css("display","block");
    $(".results-container").fadeTo(250, 1, function() {
        // Animation complete.
      });
  }

  handleClose(e) {
    $(".results-container").fadeTo(250, 0, function() {
        $(".results-container").css("display","none");
        $(".results").empty();
      });
  }

  handleUncheckAll(e) {
    $(".checkbox").prop("checked",false);
  }

  render() {
    return (
      <div className="App">
        <h1>User List</h1>
        <div className="results-container">
          <div className="results-close-area" onClick={this.handleClose}></div>
          <h2>Selected Users</h2>
          <div className="results">

          </div>
        </div>
        <UserList />
        <button className="confirm-button" onClick={this.handleClick}>Confirm</button>
        <button className="uncheckall-button" onClick={this.handleUncheckAll}>Uncheck All</button>
      </div>
    );
  }
}

export default App;

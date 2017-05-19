import React, { Component } from 'react';
import $ from "jquery";
import UserList from './Component/UserList';
import './master.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageStyle:"normal"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleUncheckAll = this.handleUncheckAll.bind(this);
    this.toggleStyle = this.toggleStyle.bind(this);
  }

  handleClick() {
    // pulls and displays selected names from state in modal
    let names = [];
    let checkedNameSections = $(".checkbox:checked").parent().parent().find(".name-section");
    Array.prototype.forEach.call(checkedNameSections,function(el) {
      names.push(el.innerHTML);
      $(".results").append(`<p>${el.innerHTML}</p>`);
    });

    $(".results-container").css("display","block");
    $(".results-container").fadeTo(250, 1);
  }

  toggleStyle() {
    if(this.state.pageStyle === "normal") {
      $(".checkbox-section").css("background-color","Transparent");
      $(".text-section").css("border-left","1px solid #bcbcbc");
      $(".name-section").css("background-color","Transparent");
      $(".name-section").css("border-bottom","1px solid #bcbcbc");
      $(".name-section").css("padding-left","5px");
      $(".UserListItem").css("border-top","1px solid #444444");
      $(".email-section").css("background-color","Transparent");
      $(".email-section").css("padding-left","5px");
      $(".email-section").css("padding-top","5px");
      $(".UserListItem:odd").css("background-color","#ededed");
      $(".UserList").css("border-top","2px solid black");
      $(".UserList").css("border-bottom","2px solid black");
      $(".confirm-button").css("left","5px");
      $(".uncheckall-button").css("left","75px");
      $(".style-toggle-button").css("color","red");
      $(".style-toggle-button").css("background-color","yellow");
      $(".style-toggle-button").css("border","1px solid green");

      this.setState({pageStyle:"alternate"});
    } else {
      $(".checkbox-section").css("background-color","red");
      $(".text-section").css("border-left","none");
      $(".name-section").css("background-color","rgb(0,125,36)");
      $(".name-section").css("border-bottom","none");
      $(".name-section").css("padding-left","0");
      $(".UserListItem").css("border-top","1px solid blue");
      $(".email-section").css("background-color","rgb(254,255,87)");
      $(".email-section").css("padding-left","0");
      $(".email-section").css("padding-top","0");
      $(".UserList").css("border-top","none");
      $(".UserList").css("border-bottom","none");
      $(".confirm-button").css("left","0px");
      $(".uncheckall-button").css("left","70px");
      $(".style-toggle-button").css("color","black");
      $(".style-toggle-button").css("background-color","white");
      $(".style-toggle-button").css("border","1px solid black");

      this.setState({pageStyle:"normal"});
    }
  }

  handleClose(e) {
    // closes and empties modal when background is clicked
    $(".results-container").fadeTo(250, 0, function() {
        $(".results-container").css("display","none");
        $(".results").empty();
      });
  }

  handleUncheckAll(e) {
    // unchecks all checkboxes
    $(".checkbox").prop("checked",false);
  }

  render() {
    return (
      <div className="App">
        <h1>User List</h1>
        <div className="style-toggle-button" onClick={this.toggleStyle}>Toggle Style</div>
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

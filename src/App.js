import React, { Component } from 'react';
import UserList from './Component/UserList';
import './master.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>User List</h1>
        <UserList />
      </div>
    );
  }
}

export default App;

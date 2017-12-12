import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Password from "./Password.js";
import Username from "./Username.js";
import ConPassword from "./ConPassword.js";

class Form extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      password: "", 
      isEqual: false
    }
    this.setPassword = this.setPassword.bind(this);
  }

  setPassword (password) {
    this.setState({password: password});
  }

  

  render() {
    return (
      <div class="container"> 
        <h1>Register</h1>
        <form>
          <Username />
          <Password onChange={this.setPassword} />
          <ConPassword password={this.state.password}/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default Form;

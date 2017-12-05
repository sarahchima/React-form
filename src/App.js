import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Password from "./Password.js";
import Username from "./Username.js";

class Form extends Component {
  render() {
    return (
      <div class="container"> 
        <h1>Register</h1>
        <form>
          <Username />
          <Password />
        </form>
      </div>
    );
  }
}

export default Form;

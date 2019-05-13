import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = e => {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({ email }, password, err => {
      console.log("Login Callback", err);
    });
  };

  facebookLogin = () => {
    Meteor.loginWithFacebook(
      {
        requestPermissions: ["email"]
      },
      err => {
        if (err) {
          console.log('err', err);
          // handle error
        } else {
          // successful login!
          console.log('sucess', err);
        }
      }
    );
  };

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit} noValidate>
          <input type="email" ref="email" name="email" placeholder="email" />
          <input
            type="password"
            ref="password"
            name="password"
            placeholder="password"
          />
          <button>Enter</button>
          <Link to="/signup">Have an account ?</Link>
        </form>
        <button onClick={this.facebookLogin}>Facebook Login</button>
      </div>
    );
  }
}

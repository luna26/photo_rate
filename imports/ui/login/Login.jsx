import React, { Component } from "react";

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
        </form>
      </div>
    );
  }
}

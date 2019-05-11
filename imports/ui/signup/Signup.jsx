import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onSubmit = e => {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if (password.length < 9) {
      return this.setState({
        error: "Password must be more than 8 characters long"
      });
    }

    Accounts.createUser({ email, password }, err => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: "" });
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Signup Page!!</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit} noValidate>
          <input type="email" ref="email" name="email" placeholder="email" />
          <input
            type="password"
            ref="password"
            name="password"
            placeholder="password"
          />
          <button>Create account</button>
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

//redux actions
import { loginType } from '../../redux/actions/';

class Login extends Component {
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
      this.props.loginType('email');
    });
  };

  facebookLogin = () => {
    Meteor.loginWithFacebook(
      {
        requestPermissions: ["email", "public_profile"]
      },
      err => {
        if (err) {
          console.log("err", err);
          // handle error
        } else {
          // successful login!
          this.props.loginType('facebook');
        }
      }
    );
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-form-container">
          <i className="material-icons camera-icon">photo_camera</i>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form className="form-login" onSubmit={this.onSubmit} noValidate>
            <div className="input-container">
              <input
                type="email"
                ref="email"
                name="email"
                placeholder="email"
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                ref="password"
                name="password"
                placeholder="••••••••"
              />
            </div>
            <button>Enter</button>
            <Link to="/signup">Have an account ?</Link>
          </form>
          <button className="facebook-btn-login" onClick={this.facebookLogin}>
            Login with Facebook{" "}
          </button>
          <p className='copy-text'>Copyright © 2019 Jose Luna.</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ login }) => {
  return {
    login: login
  };
};

export default connect(mapStateToProps, {
  loginType
})(Login);

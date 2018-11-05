import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import './LoginPage.css';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="loginView">
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
          <form onSubmit={this.login}>
          
            <h1 className="loginHeader">Log In</h1>
            <div>
              <label htmlFor="username">
              <Input
                  className="loginInput"
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChangeFor('username')}
                  variant="outlined"
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
              <Input
                  className="loginInput"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('password')}
                  variant="outlined"
                />
              </label>
            </div>
            <div>
              <Button
                className="log-in"
                type="submit"
                name="submit"
                value="Log In"
              >
              Log In
              </Button>
            </div>
          </form>
          <center>
            <Button
              type="button"
              className="link-button"
              onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
            >
              Register
          </Button>
          </center>
        
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);

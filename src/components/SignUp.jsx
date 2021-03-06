import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';
class SignUp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }
  signUp() {
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch( error => {
      this.setState({error});
    });
  }
  render() {
    return (
      <div className = 'form-inline  signup-form'>
        <h2>Sign Up</h2>
        <div className = 'form-group'>
          <input
            className = 'form-control signup-input'
            type = 'text'
            placeholder = 'email'
            onChange = {event => this.setState({email: event.target.value})}/>
          <input
            className = 'form-control signup-input'
            type = 'password'
            placeholder = 'password'
            onChange = {event => this.setState({password: event.target.value})}/>
          <button
            className = 'btn btn-primary'
            type = 'button'
            onClick = {() => this.signUp()}>
            Sign Up
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to = {'/signin'}>Already have an account? Sign in now</Link></div>
      </div>
    )
  }
}

export default SignUp;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div>
        App
        <button
          type = 'button'
          className = 'btn btn-danger'
          onClick = {() => this.signOut()}>
          Sign Out
        </button>
        <AddGoal/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state
  }
}
export default connect(mapStateToProps, null) (App)

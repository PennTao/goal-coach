import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fireDatabase } from '../firebase';

class CompleteGoalItem extends Component {
  undoCompleteGoal() {
    //const { email } = this.props.user;
    const { title, email, id } = this.props.completeGoal;
    fireDatabase.ref('complete-goals/').child(id).remove()
    fireDatabase.ref('goals/').push({email, title});
  }

  render() {
    const { title } = this.props.completeGoal;
    const emailSubmit = this.props.completeGoal.email;
    const emailComplete = this.props.user.email;
    return (
      <div className = 'item-goal'>
        <strong>{ title }</strong>
        <span> submitted  by {emailSubmit} completed by <em>{ emailComplete }</em></span>
        <button
          className = 'btn btn-sm btn-danger button-complete'
          onClick = {() => this.undoCompleteGoal()}>
          Undo
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {user} = state;
  return {
    user
  }
}
export default connect(mapStateToProps, null)(CompleteGoalItem);

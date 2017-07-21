import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fireDatabase } from '../firebase';

class GoalItem extends Component {
  completeGoal() {
    const { email } = this.props.user;
    const { title, id } = this.props.goal;
    fireDatabase.ref('goals/').child(id).remove();
    fireDatabase.ref('complete-goals/').push({email, title});

  }
  render() {
    const { email, title } = this.props.goal;
    return (
      <div className = 'item-goal'>
        <strong>{ title }</strong>
        <span> submitted by <em>{ email }</em></span>
        <button
          className = 'btn btn-sm btn-primary button-complete'
          onClick = {() => this.completeGoal()}>
          Complete
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
export default connect(mapStateToProps, null)(GoalItem);

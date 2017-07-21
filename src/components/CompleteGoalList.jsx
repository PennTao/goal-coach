import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompleteGoalItem from './CompleteGoalItem';
import { fireDatabase } from '../firebase';
import { setCompleteGoals } from '../actions';

class CompleteGoalList extends Component {
  componentDidMount() {
    fireDatabase.ref('complete-goals/').on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        let completeGoalObject = completeGoal.val();
        completeGoalObject.id = completeGoal.key;
        completeGoals.push(completeGoalObject);
      });
      this.props.setCompleteGoals(completeGoals);
    })
  }

  clearCompleted() {
    fireDatabase.ref('complete-goals/').set([]);
  }

  render() {
    console.log('In CompleteGoalList',this.props)
    return (
      <div>
        {
          this.props.completeGoals.map(completeGoal => {
            return(
              <CompleteGoalItem key = {completeGoal.id} completeGoal = {completeGoal}/>
            )
          })
        }
        <button
          className = 'btn btn-primary'
          onClick = { () => this.clearCompleted() }
          >
          Clear Completed
        </button>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  const { completeGoals } = state;
  return {
    completeGoals
  };
}

export default connect(mapStateToProps, { setCompleteGoals })(CompleteGoalList);

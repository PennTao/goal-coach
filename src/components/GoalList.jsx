import React, { Component } from 'react';
import { connect} from 'react-redux';
import { fireDatabase } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem';

class GoalList extends Component {
  componentDidMount() {
    console.log('componentDidMount triggered')
    fireDatabase.ref('goals/').on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        let goalObject = goal.val();
        goalObject.id = goal.key;
        goals.push(goalObject);
      });
      this.props.setGoals(goals);
    })
  }


  render() {
    return (
      <div>
        {
          this.props.goals.map(goal => {
            return(
              <GoalItem key = {goal.id} goal = {goal}/>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { goals } = state;
  return {
    goals
  };
}
export default connect(mapStateToProps, { setGoals }) (GoalList);

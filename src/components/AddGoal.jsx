import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fireDatabase } from '../firebase';

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    }
  }

  addGoal() {
    console.log('in addGoal', this.props)
    const { email } = this.props.user;
    const { title } = this.state;
    fireDatabase.ref('goals/').push({email, title, isdone: false});
  }
  render() {
    return (
      <div className = 'form-inline item-add-goal'>
        <div className = 'form-group'>
          <input
            type = 'text'
            className = 'form-control'
            placeholder = 'Add goal'
            style = { {marginRight: '5px'}}
            onChange = { event => this.setState({title: event.target.value})}/>
          <button
            className = 'btn btn-primary'
            type = 'button'
            onClick = { () => this.addGoal() }>
            Add Goal
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user
  }
}
export default connect(mapStateToProps, null)(AddGoal);

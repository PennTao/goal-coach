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
    const { email } = this.props;
    const { title } = this.state;
    fireDatabase.ref('goals/').push({email, title});
    console.log(email, title);
  }
  render() {
    return (
      <div className = 'form-inline'>
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
  return {
    email: state.email
  }
}
export default connect(mapStateToProps, null)(AddGoal);

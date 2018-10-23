import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class WorkoutList extends Component {

  state = {
    newWorkout: {
      workout_id: 0,
      user_id: 0,
      added_weight: 0,
      route_rating: '',
      comments: '',
      start_time: '',
      end_time: '',
    }
  }

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_WORKOUT'});
  }

  render() {
    return (
      <div>
        <h2>
          Workout List
    </h2>

        <form>
          <input type="time" placeholder="Start Time" />
          <input type="time" placeholder="End Time" />
          <input type="number" placeholder="Workout ID" />
          <input type="number" placeholder="Additional weight (optional)" />
          <input type="text" placeholder="Route Rating (optional)" />
          <textarea placeholder="Any additional comments?"/>
          <input type="submit" />
        </form>
        {JSON.stringify(this.props.workouts, null, 2)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  workouts: state.workout,
})

export default connect(mapStateToProps)(WorkoutList);

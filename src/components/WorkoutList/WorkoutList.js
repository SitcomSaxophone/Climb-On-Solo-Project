import React, { Component } from 'react';
import axios from 'axios';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class WorkoutList extends Component {

  state = {
    workouts: [],
  }

  componentDidMount() {
    this.getWorkouts();
  }

  getWorkouts = () => {
    axios({
      method: 'GET',
      url: '/api/workout'
    }).then(response => {
      console.log(response.data);
      this.setState({
        workouts: response.data,
      })
    }).catch(error => {
      alert('Error making GET to server: ', error);
    });
  }

  render() {
    return (
      <div>
        <h2>
          Workout List
    </h2>

      <ul>
        {this.state.workouts.map(workout => (
        <li key={workout.id}>
          Workout: {workout.name} 
          On Time: {workout.on_time}sec 
          Off Time: {workout.off_time}sec
          Rest Time: {workout.rest_time}sec
        </li>))}
      </ul>
      </div>
    )
  }
}

export default WorkoutList;

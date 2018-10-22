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


      </div>
    )
  }
}

export default WorkoutList;

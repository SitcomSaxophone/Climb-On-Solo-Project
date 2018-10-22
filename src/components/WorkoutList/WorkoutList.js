import React, { Component } from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class WorkoutList extends Component {

  state = {
    workouts: [],
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

import React, { Component } from 'react';
import { connect } from 'react-redux';

class WorkoutList extends Component {

  state = {
    newWorkout: {
      workout_id: 0,
      user_id: this.props.user.id,
      added_weight: 0,
      route_rating: '',
      comments: '',
    },
    newScheduleDate: {
      date: new Date(),
      start_time: '',
      end_time: '',
    }
  }

  // componentWillReceiveProps() {
  //   this.setState({
  //     newWorkout: {
  //       ...this.state.newWorkout,
  //       start_time: this.props.newSchedule.startDate,
  //       end_time: this.props.newSchedule.endDate,
  //     }
  //   });
  // }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_WORKOUT' });
  }

  scheduleNewWorkout = () => event => {
    event.preventDefault();
    this.props.dispatch({
      type: 'SCHEDULE_NEW_WORKOUT', 
      payload: {
        ...this.state.newWorkout, 
        start_time: this.props.newSchedule.startDate, 
        end_time: this.props.newSchedule.endDate,
      }
    });
  }

  handleChangeFor = property => event => {
    this.setState({
      newWorkout: {
        ...this.state.newWorkout,
        [property]: event.target.value,
      }
    });
  }

  handleDateChangeFor = property => event => {
    this.setState({
      newScheduleDate: {
        ...this.state.newScheduleDate,
        [property]: event.target.value,
      }
    });
  }

  handleSelectChange = event => {
    this.setState({
      newWorkout: {
        ...this.state.newWorkout,
        workout_id: Number([...event.target.selectedOptions].filter(o => o.selected).map(o => o.value)),
      }
    })
  }

  handleNewDate = event => {
    event.preventDefault();
    this.props.dispatch({
      type: 'NEW_SCHEDULE_DATE',
      payload: this.state.newScheduleDate,
    });
  }

  render() {
    return (
      <div>
        <h2>
          Workout List
    </h2>

        <form onSubmit={this.scheduleNewWorkout()}>
          <input
            type="date"
            onChange={this.handleDateChangeFor('date')}
            value={this.state.date}
          />
          <input
            type="time"
            onChange={this.handleDateChangeFor('start_time')}
            value={this.state.newScheduleDate.start_time}
          />
          <input
            type="time"
            onChange={this.handleDateChangeFor('end_time')}
            onBlur={this.handleNewDate}
            value={this.state.newScheduleDate.end_time}
          />
          <select onChange={this.handleSelectChange}>
            <option value="">--Choose a workout--</option>
            {this.props.workouts.map(workout => (
              <option
                key={workout.id}
                value={workout.id}
              >
                {workout.name}
              </option>))}
          </select>
          <input
            type="number"
            placeholder="Additional weight (optional)"
            onChange={this.handleChangeFor('added_weight')}
          />
          <input
            type="text"
            placeholder="Route Rating (optional)"
            onChange={this.handleChangeFor('route_rating')}
          />
          <textarea
            placeholder="Any additional comments?"
            onChange={this.handleChangeFor('comments')}
          />
          <input type="submit" />
        </form>
        {JSON.stringify(this.state, null, 2)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  workouts: state.workout,
  newSchedule: state.newSchedule,
})

export default connect(mapStateToProps)(WorkoutList);

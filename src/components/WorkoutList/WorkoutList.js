import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

class WorkoutList extends Component {

  state = {
    newWorkout: {
      workout_id: 0,
      user_id: this.props.user.id,
    },
    newScheduleDate: {
      date: new Date(),
      start_time: '',
      end_time: '',
    }
  }

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
        // workout_id: Number(event.target.value),
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
        {/* <h2>
          Workout List
    </h2> */}

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
          <Select native={true} onChange={this.handleSelectChange}>
            <option value="">--Choose a workout--</option>
            {this.props.workouts.map(workout => (
              <option
                key={workout.id}
                value={workout.id}
              >
                {workout.name}
              </option>))}
          </Select>
          <Button type="submit" variant="outlined" color="primary">Submit</Button>
        </form>
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

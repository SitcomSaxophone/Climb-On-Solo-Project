import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import DatePicker from 'react-datepicker';
import { withStyles } from '@material-ui/core/styles';
import 'react-datepicker/dist/react-datepicker.css';

const styles = {
  form: {
    display: 'inline-block'
  }
}

class WorkoutList extends Component {

  state = {
    newWorkout: {
      workout_id: 0,
      user_id: this.props.user.id,
    },
    newScheduleDate: {
      date: null,
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
    this.props.dispatch({ type: 'TOGGLE_CALENDAR_FORM' });
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

  handleDatePicker = newDate => {
    this.setState({
      newScheduleDate:{
        ...this.state.newScheduleDate,
        date: newDate,
      }
    });
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
      <div className={this.props.classes.form} id="workoutFormDiv">
        <form onSubmit={this.scheduleNewWorkout()}>
          <DatePicker
            onChange={this.handleDatePicker}
            selected={this.state.newScheduleDate.date}
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
  scheduleForm: state.scheduleForm,
})

export default withStyles(styles)(connect(mapStateToProps)(WorkoutList));

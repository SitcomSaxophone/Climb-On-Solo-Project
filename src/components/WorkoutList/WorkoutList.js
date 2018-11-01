import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { InputLabel } from '@material-ui/core';

const styles = {
  form: {
    display: 'inline-block',
    paddingBottom: '3vmin'
  },
  input: {
    height: 60,
    marginLeft: '1vmin',
    marginRight: '1vmin'
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
    },
    labelWidth: 0,
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_WORKOUT' });
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
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
        // workout_id: Number([...event.target.selectedOptions].filter(o => o.selected).map(o => o.value)),
        workout_id: Number(event.target.value),
      }
    })
  }

  handleDatePicker = newDate => {
    this.setState({
      newScheduleDate: {
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
          <FormControl>
            <TextField
              required
              type="date"
              variant="outlined"
              onChange={this.handleDateChangeFor('date')}
              helperText="Select a date"
              className={this.props.classes.input}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              type="time"
              onChange={this.handleDateChangeFor('start_time')}
              value={this.state.newScheduleDate.start_time}
              variant="outlined"
              helperText="Set a start time"
              className={this.props.classes.input}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              type="time"
              onChange={this.handleDateChangeFor('end_time')}
              onBlur={this.handleNewDate}
              value={this.state.newScheduleDate.end_time}
              variant="outlined"
              helperText="Set an end time"
              className={this.props.classes.input}
            />
          </FormControl>
          <FormControl required variant="outlined">
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-workout-simple"
            >Select a Workout</InputLabel>
            <Select
              value={this.state.newWorkout.workout_id}
              onChange={this.handleSelectChange}
              input={
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                />}
              className={this.props.classes.input}
              style={{width: 200}}
            >
              {this.props.workouts.map(workout => (
                <MenuItem
                  key={workout.id}
                  value={workout.id}
                >
                  {workout.name}
                </MenuItem>))}
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="outlined"
            style={{ height: 40 }}
          >
            Submit
          </Button>
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

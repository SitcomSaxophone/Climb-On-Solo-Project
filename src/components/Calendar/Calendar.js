import React, { Component } from 'react';
import { connect } from 'react-redux';
import CalendarItem from '../CalendarItem/CalendarItem';
import WorkoutList from '../WorkoutList/WorkoutList';
import IconButton from '@material-ui/core/IconButton';
import AddBox from '@material-ui/icons/AddBox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class Calendar extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_SCHEDULE', payload: this.props.user.id });
    }

    handleFormToggle = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'TOGGLE_CALENDAR_FORM' });
    }

    render() {
        return (
            <div>
                <h2>
                    Calendar
                </h2>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <IconButton onClick={this.handleFormToggle}>
                                <AddBox />
                            </IconButton>
                        }
                        label="Schedule a new Workout"
                        style={{width: 65}}
                    />
                </FormGroup>
                {this.props.scheduleForm === true ? (
                    <WorkoutList />
                ) : (
                    null
                )}
                {this.props.schedule.map(date =>
                    <CalendarItem
                        key={date.id}
                        date={date}
                    />
                )}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    schedule: state.schedule,
    scheduleForm: state.scheduleForm,
})

export default connect(mapStateToProps)(Calendar);
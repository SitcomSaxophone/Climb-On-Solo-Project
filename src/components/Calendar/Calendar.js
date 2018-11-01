import React, { Component } from 'react';
import { connect } from 'react-redux';
import CalendarItem from '../CalendarItem/CalendarItem';
import WorkoutList from '../WorkoutList/WorkoutList';
import IconButton from '@material-ui/core/IconButton';
import AddBox from '@material-ui/icons/AddBox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        textAlign: 'center',
    },
    title: {
        fontSize: '6vmin',
        marginTop: '0'
    },
    iconButton: {
        height: '10vmin',
        width: '10vmin',
        paddingLeft: '6vmin',
        paddingBottom: '3vmin',
        marginLeft: 25,
        marginRight: 0
    },
    icon: {
        height: '7vmin',
        width: '7vmin',
    }
}

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
            <div className={this.props.classes.root}>
                <h2 className={this.props.classes.title}>
                    Calendar
                </h2>
                <FormGroup className={this.props.classes.iconButton}>
                    <FormControlLabel
                        control={
                            <IconButton  onClick={this.handleFormToggle}>
                                <AddBox className={this.props.classes.icon}/>
                            </IconButton>
                        }
                        label="New Workout"
                        style={{ width: 65 }}
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

export default withStyles(styles)(connect(mapStateToProps)(Calendar));
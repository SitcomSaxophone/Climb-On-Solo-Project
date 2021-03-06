import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        backgroundColor: 'white',
        width: '86%',
        margin: 'auto'
    },
    title: {
        paddingBottom: 0,
        fontSize: '5vmin'
    },
    content: {
        display: 'flex',
        paddingTop: 0
    },
    contentInput: {
        marginLeft: '2vmin',
        marginRight: '2vmin',
        height: 60
    },
    completionForm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    exercise: {
        fontSize: '4.5vmin'
    },
    expandDiv: {
        paddingTop: 0,
        paddingBottom: 0
    },
    icon: {
        width: 50,
        marginLeft: '10vmin',
        marginRight: '10vmin',
    }
}

class CalendarItem extends Component {

    state = {
        expanded: false,
        workout: {
            isComplete: false,
            comments: '',
            added_weight: 0,
            route_rating: '',
        },
    };

    handleExpandClick = () => {
        // switch 'expanded' boolean value on button click
        this.setState(state => ({ expanded: !state.expanded }));
    };

    handleCheck = data => event => {
        // switch 'isComplete' boolean value on checkbox click
        this.setState({
            workout: {
                ...this.state.workout,
                isComplete: !this.state.workout.isComplete,
            }
        });
    }

    handleChangeFor = property => event => {
        // set values of state.workout properties upon enter text in inputs
        this.setState({
            workout: {
                ...this.state.workout,
                [property]: event.target.value,
            }
        });
    }

    handleSaveCompletedWorkout = data => event => {
        event.preventDefault();
        // dipatch database update action to scheduleSaga.js
        this.props.dispatch({ type: 'UPDATE_SCHEDULE', payload: { ...this.state.workout, id: data.id } });
        // empty inputs upon submission of update information
        this.setState({ workout: { added_weight: null, route_rating: '', comments: '' } });
    }

    handleDelete = data => event => {
        event.preventDefault();
        // dispatch database delete action to scheduleSaga.js
        this.props.dispatch({ type: 'DELETE_WORKOUT', payload: data });
    }

    render() {
        return (
            <React.Fragment>
                <Card className={this.props.classes.root} key={this.props.date.id}>
                    <CardHeader
                        title={this.props.date.start_date}
                        subheader={this.props.date.end_date}
                        className={this.props.classes.title}
                    />
                    <CardActions className={this.props.classes.expandDiv}>
                        <IconButton
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent className={this.props.content}>
                            <Typography className={this.props.classes.exercise}>
                                {this.props.date.name}
                            </Typography>
                            <TextField
                                autowidth="true"
                                type="text"
                                placeholder="Route Rating (optional)"
                                onChange={this.handleChangeFor('route_rating')}
                                variant="outlined"
                                value={this.state.workout.route_rating}
                                className={this.props.classes.contentInput}
                            />
                            <TextField
                                autowidth="true"
                                type="number"
                                placeholder="Added weight (optional)"
                                onChange={this.handleChangeFor('added_weight')}
                                variant="outlined"
                                className={this.props.classes.contentInput}
                            />
                            <br />
                            <TextField
                                autowidth="true"
                                label="Additional comments?"
                                multiline
                                rowsMax="5"
                                margin="normal"
                                onChange={this.handleChangeFor('comments')}
                                variant="outlined"
                                value={this.state.workout.comments}
                                className={this.props.classes.contentInput}
                            />
                            <FormGroup className={this.props.classes.completionForm}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.workout.isComplete}
                                            onChange={this.handleCheck(this.props.date)}
                                            color="primary"
                                            style={{ height: 34, width: 34 }}
                                        />
                                    }
                                    label="Complete Exercise"
                                    className={this.props.classes.icon}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{
                                        marginLeft: '10vmin',
                                        marginRight: '10vmin',
                                    }}
                                    onClick={this.handleSaveCompletedWorkout(this.props.date)}
                                >
                                    Archive
                                </Button>
                                <FormControlLabel
                                    control={
                                        <IconButton onClick={this.handleDelete(this.props.date)}>
                                            <DeleteIcon style={{ height: 34, width: 34 }} />
                                        </IconButton>
                                    }
                                    label="Delete Exercise"
                                    className={this.props.classes.icon}
                                />
                            </FormGroup>
                        </CardContent>
                    </Collapse>
                </Card>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    schedule: state.schedule,
})

export default withStyles(styles)(connect(mapStateToProps)(CalendarItem));
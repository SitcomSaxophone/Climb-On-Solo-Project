import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Input from '@material-ui/core/Input';
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
    },
    listDate: {
        paddingBottom: '0',
        fontSize: '5vmin'
    },
    content: {
        display: 'flex',
        paddingTop: '0'
    },
    contentInput: {
        marginLeft: '2vmin',
        marginRight: '2vmin'
    },
    completionForm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    exercise: {
        fontSize: '4vmax'
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
        this.setState(state => ({ expanded: !state.expanded }));
    };

    handleCheck = data => event => {
        this.setState({
            workout: {
                ...this.state.workout,
                isComplete: !this.state.workout.isComplete,
            }
        });
    }

    handleChangeFor = property => event => {
        this.setState({
            workout: {
                ...this.state.workout,
                [property]: event.target.value,
            }
        });
    }

    handleSaveCompletedWorkout = data => event => {
        event.preventDefault();
        this.props.dispatch({ type: 'UPDATE_SCHEDULE', payload: { ...this.state.workout, id: data.id } });
        this.setState({ workout: { added_weight: null, route_rating: '', comments: '' } });
    }

    handleDelete = data => event => {
        event.preventDefault();
        this.props.dispatch({ type: 'DELETE_WORKOUT', payload: data });
    }

    render() {
        // const { classes } = this.props;
        return (
            <React.Fragment>
                <Card className={this.props.classes.root} key={this.props.date.id}>
                    <CardHeader
                        title={this.props.date.start_date}
                        subheader={this.props.date.end_date}
                        className={this.props.classes.listDate}
                    />
                    <CardActions>
                        <IconButton
                            // className={classnames(classes.expand, {
                            //     [classes.expandOpen]: this.state.expanded,
                            // })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent className={this.props.content}>
                            <Typography className={this.props.classes.exercise} variant="h5">
                                {this.props.date.name}
                            </Typography>
                            <Input
                                autowidth="true"
                                type="text"
                                placeholder="Route Rating (optional)"
                                onChange={this.handleChangeFor('route_rating')}
                                variant="outlined"
                                value={this.state.workout.route_rating}
                                className={this.props.classes.contentInput}
                            />
                            {/* <br /> */}
                            <Input
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
                            />
                            <FormGroup className={this.props.classes.completionForm}>
                                {this.props.date.iscomplete ? (
                                    <Typography paragraph>Workout Completed!</Typography>
                                ) : (
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.workout.isComplete}
                                                    onChange={this.handleCheck(this.props.date)}
                                                    color="primary"
                                                />
                                            }
                                            label="Complete Exercise"
                                            style={{ 
                                                width: 60, 
                                                marginLeft: '10vmin', 
                                                marginRight: '10vmin',  
                                            }}
                                        />
                                    )}

                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ 
                                        marginLeft: '10vmin', 
                                        marginRight: '10vmin' 
                                    }}
                                    onClick={this.handleSaveCompletedWorkout(this.props.date)}
                                >
                                    Archive
                                </Button>
                                <FormControlLabel
                                    control={
                                    <IconButton onClick={this.handleDelete(this.props.date)}>
                                        <DeleteIcon />
                                    </IconButton>
                                    }
                                    label="Delete Exercise"
                                    style={{ 
                                        width: 60, 
                                        marginLeft: '10vmin', 
                                        marginRight: '10vmin',
                                    }}
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
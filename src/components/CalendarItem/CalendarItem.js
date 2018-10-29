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

    handleDelete = data => event => {
        event.preventDefault();
        this.props.dispatch({ type: 'DELETE_WORKOUT', payload: data });
    }

    handleSaveCompletedWorkout = data => event => {
        event.preventDefault();
        this.props.dispatch({type: 'UPDATE_SCHEDULE', payload: {...this.state.workout, id: data.id}});
        this.setState({workout:{added_weight: null, route_rating: '', comments: ''}});
    }

    render() {
        return (
            <React.Fragment>
                <Card key={this.props.date.id}>
                    <CardHeader
                        title={this.props.date.start_date}
                        subheader={this.props.date.end_date}
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
                        <CardContent>
                            <Typography className="class-card-exercise" variant="h5">
                                {this.props.date.name}
                            </Typography>
                            <Input
                                autowidth="true"
                                type="text"
                                placeholder="Route Rating (optional)"
                                onChange={this.handleChangeFor('route_rating')}
                                variant="outlined"
                                value={this.state.workout.route_rating}
                            />
                            <br />
                            <Input
                                autowidth="true"
                                type="number"
                                placeholder="Added weight (optional)"
                                onChange={this.handleChangeFor('added_weight')}
                                variant="outlined"
                            />
                            <br />
                            <TextField
                                autowidth="true"
                                label="Any additional comments?"
                                multiline
                                rowsMax="5"
                                margin="normal"
                                onChange={this.handleChangeFor('comments')}
                                variant="outlined"
                                value={this.state.workout.comments}
                            />
                            <FormGroup>
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
                                    style={{width: 60}}
                                />
                                )}
                                
                                <Button 
                                    variant="contained"
                                    color="primary"
                                    style={{width: 40}}
                                    onClick={this.handleSaveCompletedWorkout(this.props.date)}
                                >
                                    Send
                                </Button>
                                <FormControlLabel
                                    control={<IconButton onClick={this.handleDelete(this.props.date)}>
                                        <DeleteIcon />
                                    </IconButton>
                                    }
                                    label="Delete Exercise"
                                    style={{width: 60}}
                                />
                                    {this.props.date.added_weight > 0 ? (
                                    <Typography>{this.props.date.added_weight} additional lbs/kg</Typography>
                                    ) : (
                                        null
                                    )}
                                    <Typography paragraph>{this.props.date.route_rating}</Typography>
                                    <Typography paragraph>{this.props.date.comments}</Typography>
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

export default connect(mapStateToProps)(CalendarItem);
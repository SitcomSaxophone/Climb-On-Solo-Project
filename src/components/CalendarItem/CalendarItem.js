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
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';

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
        this.props.dispatch({ type: 'DELETE_WORKOUT', payload: data});
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
                                // onChange={this.handleChangeFor('route_rating')}
                                variant="outlined"
                            />
                            <br/>
                            <Input
                                autowidth="true"
                                type="number"
                                placeholder="Added weight (optional)"
                                // onChange={this.handleChangeFor('added_weight')}
                                variant="outlined"
                            />
                            <br/>
                            <TextField
                                autowidth="true"
                                label="Any additional comments?"
                                multiline
                                rowsMax="5"
                                margin="normal"
                                // onChange={this.handleChangeFor('comments')}
                                variant="outlined"
                            />
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.workout.isComplete}
                                            onChange={this.handleCheck(this.props.date)}
                                            color="primary"
                                        />
                                    }
                                    label="Complete Exercise"
                                />
                                <FormControlLabel
                                    control={<IconButton onClick={this.handleDelete(this.props.date)}>
                                        <DeleteSharpIcon />
                                    </IconButton>
                                    }
                                    label="Delete Exercise"
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

export default connect(mapStateToProps)(CalendarItem);
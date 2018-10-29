import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DeleteIcon from '@material-ui/icons/Delete';

class ArchiveItem extends Component {

    state = {
        expanded: false,
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    }

    handleDelete = data => event => {
        event.preventDefault();
        this.props.dispatch({ type: 'DELETE_ARCHIVED_WORKOUT', payload: data });
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
                            {this.props.date.added_weight > 0 ? (
                                <Typography paragraph>{this.props.date.added_weight} additional lbs/kg</Typography>
                            ) :(
                                null
                            )} 
                            <Typography paragraph>{this.props.date.route_rating}</Typography>
                            <Typography paragraph>{this.props.date.comments}</Typography>
                            <FormControlLabel
                                control={<IconButton onClick={this.handleDelete(this.props.date)}>
                                    <DeleteIcon />
                                </IconButton>
                                }
                                label="Delete Exercise"
                                style={{ width: 60 }}
                            />
                        </CardContent>
                    </Collapse>
                </Card>
            </React.Fragment>
        )
    }
}

export default connect()(ArchiveItem);
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class ArchiveItem extends Component {

    state = {
        expanded: false,
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
                                    <Typography paragraph>Workout Completed!</Typography>
                                    <Typography>{this.props.date.added_weight} additional lbs/kg</Typography>
                                    <Typography paragraph>{this.props.date.route_rating}</Typography>
                                    <Typography paragraph>{this.props.date.comments}</Typography>
                           
                        </CardContent>
                    </Collapse>
                </Card>
            </React.Fragment>
        )
    }
}

export default ArchiveItem;
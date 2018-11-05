import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArchiveItem from '../ArchiveItem/ArchiveItem';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        textAlign: 'center',
    },
    title: {
        fontSize: '6vmin',
        marginTop: '0'
    },
}

class Archive extends Component {

    // dispatch a fetch action to the scheduleSaga.js file 
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_ARCHIVE', payload: this.props.user.id });
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <h2 className={this.props.classes.title}>
                    Archive
                </h2>
                {/* map through the returned array of completed workout history */}
                {this.props.archive.map(date =>
                    <ArchiveItem // individual archived schedule date card
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
    archive: state.schedule,
})

export default withStyles(styles)(connect(mapStateToProps)(Archive));
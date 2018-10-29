import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArchiveItem from '../ArchiveItem/ArchiveItem';

class Archive extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_ARCHIVE', payload: this.props.user.id });
    }

    render() {
        return (
            <div className="calendarDiv">
                <h2>
                    Archive
                </h2>
                {this.props.archive.map(date =>
                    <ArchiveItem
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

export default connect(mapStateToProps)(Archive);
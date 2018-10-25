import React, { Component } from 'react';
import { connect } from 'react-redux';
import CalendarItem from '../CalendarItem/CalendarItem';


class Calendar extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_SCHEDULE', payload: this.props.user.id });
    }

    render() {
        return (
            <div>
                <h2>
                    Calendar
                </h2>
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
})

export default connect(mapStateToProps)(Calendar);
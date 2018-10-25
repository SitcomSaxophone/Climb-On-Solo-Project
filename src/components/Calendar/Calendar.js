import React, { Component } from 'react';
import { connect } from 'react-redux';

class Calendar extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_SCHEDULE', payload: this.props.user.id});
    }

    render() {
        

        return (
            <div>
                <h2>
                    Calendar
                </h2>

                <ul>
                    {this.props.schedule.map(date => <li key={date.id}>{date.start_date} {date.end_date} {date.name}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    schedule: state.schedule,
})

export default connect(mapStateToProps)(Calendar);
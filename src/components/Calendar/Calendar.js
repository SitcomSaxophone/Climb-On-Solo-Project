import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment';

class Calendar extends Component {

    state = {
        schedule: [],
    }

    componentDidMount() {
        this.getSchedule();
    }

    getSchedule = () => {
        axios({
            method: 'GET',
            url: '/api/schedule'
        }).then(response => {
            this.setState({
                schedule: response.data,
            });
            console.log(this.state.schedule);
        }).catch(error => {
            alert('Error making GET to server: ', error);
        });
    }

    render() {
        

        return (
            <div>
                <h2>
                    Calendar
                </h2>

                <ul>
                    {this.state.schedule.map(date => <li key={date.id}>{date.start_date} {date.end_date}</li>)}
                </ul>
            </div>
        )
    }
}

export default connect()(Calendar);
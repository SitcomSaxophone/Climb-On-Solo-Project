import React, { Component } from 'react';
import axios from 'axios';

class SpecificWorkout extends Component {

    state = {
        workouts: [],
    }

    componentDidMount() {
        this.getWorkouts();
    }

    getWorkouts = () => {
        axios({
            method: 'GET',
            url: '/api/workout'
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            alert('Error making GET to server: ', error);
        });
    }

    render() {
        return (
            <div>
                <h2>
                    Specific Workout
                </h2>

            </div>
        )
    }
}

export default SpecificWorkout;
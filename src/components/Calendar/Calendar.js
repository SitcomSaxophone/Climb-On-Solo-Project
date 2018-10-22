import React, { Component } from 'react';

class Calendar extends Component {
    render() {
        return (
            <div>
                <h2>
                    Calendar
                </h2>

                <form>
                    <input type="time" placeholder="Start Time"/>
                    <input type="time" placeholder="End Time"/>
                    <input type="number" placeholder="Workout ID"/>
                    <input type="number" placeholder="Additional weight (if any)"/>
                    <input type="text" placeholder="Route Rating (if necessary)"/>
                    <textarea />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Calendar;
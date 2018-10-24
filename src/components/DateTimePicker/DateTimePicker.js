import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

// const styles = theme => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing.unit,
//         marginRight: theme.spacing.unit,
//         width: 200,
//     },
// });

class DateTimePicker extends Component {
    state = {
        start_time: null,
        end_time: null,
    }

    handleDateChange = (e, date) => {
        this.setState({
            start_time: date,
        });
        console.log(e, date);
    }

    render() {
        return (
            <React.Fragment>
                <TextField
                    id="datetime-local"
                    type="datetime-local"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={this.state.start_time}
                    onChange={this.props.handleDateChange}
                    start_time={this.state.start_time}
                    end_time={this.state.end_time}
                />
            </React.Fragment>
        );
    }
}

export default DateTimePicker;
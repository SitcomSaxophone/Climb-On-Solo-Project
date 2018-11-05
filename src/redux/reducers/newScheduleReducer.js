import moment from 'moment';

const newSchedule = (state = {}, action) => {
    switch (action.type) {
        case 'NEW_SCHEDULE_DATE':
            // reformat the date to a string better suited for database timestamp insert
            let _date = moment(action.payload.date).format('L');
            // concatenate the reformatted date with the required time string for database timestamp insert
            let startDate = _date + ' ' + action.payload.start_time;
            let endDate = _date + ' ' + action.payload.end_time;
            // return the reformatted/concatenated strings
            return {startDate: startDate, endDate: endDate};
        default:
            return state;
    }
}

// newSchedule will be on the redux state at:
// state.newSchedule
export default newSchedule;
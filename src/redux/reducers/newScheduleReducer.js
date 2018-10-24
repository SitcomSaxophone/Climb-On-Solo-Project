import moment from 'moment';

const newSchedule = (state = {}, action) => {
    switch (action.type) {
        case 'NEW_SCHEDULE_DATE':
            let startDate = action.payload.date + ' ' + action.payload.start_time;
            let endDate = action.payload.date + ' ' + action.payload.end_time;
            let _startDate = moment(startDate).format('YYYY/MM/DD HH:MM:SS');
            let _endDate = moment(endDate).format('YYYY/MM/DD HH:MM:SS');
            return {startDate: _startDate, endDate: _endDate};
        default:
            return state;
    }
}

export default newSchedule;
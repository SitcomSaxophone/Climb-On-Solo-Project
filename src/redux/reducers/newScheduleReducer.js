import moment from 'moment';

const newSchedule = (state = {}, action) => {
    switch (action.type) {
        case 'NEW_SCHEDULE_DATE':
            let _date = moment(action.payload.date).format('L');
            let startDate = _date + ' ' + action.payload.start_time;
            let endDate = _date + ' ' + action.payload.end_time;
            return {startDate: startDate, endDate: endDate};
        default:
            return state;
    }
}

export default newSchedule;
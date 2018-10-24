import moment from 'moment';

const newSchedule = (state = {}, action) => {
    switch (action.type) {
        case 'NEW_SCHEDULE_DATE':
            let startDate = action.payload.date + action.payload.start_time;
            let endDate = action.payload.date + action.payload.end_time;
            let _startDate = moment(startDate).format('yyyy/mm/dd hh/mm/ss');
            let _endDate = moment(endDate).format('yyyy/mm/dd hh/mm/ss');
            return {startDate: _startDate, endDate: _endDate};
        default:
            return state;
    }
}

export default newSchedule;
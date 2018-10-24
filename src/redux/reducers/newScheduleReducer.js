const newSchedule = (state = {}, action) => {
    switch (action.type) {
        case 'NEW_SCHEDULE_DATE':
            let startDate = action.payload.date + ' ' + action.payload.start_time;
            let endDate = action.payload.date + ' ' + action.payload.end_time;
            return {startDate: startDate, endDate: endDate};
        default:
            return state;
    }
}

export default newSchedule;
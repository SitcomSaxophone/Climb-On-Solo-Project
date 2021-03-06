import moment from 'moment';

const schedule = (state = [], action) => {
    switch (action.type) {
        case 'SET_SCHEDULE':
            // reformat the returned dates and times to be more readable 
            for (let date of action.payload) {
                date.start_date = moment(date.start_date).format('dddd MMMM Do YYYY, h:mm:ss a');
                date.end_date = moment(date.end_date).format('dddd MMMM Do YYYY, h:mm:ss a');
            }
            return [...action.payload];
        case 'SET_ARCHIVE':
            // reformat the returned dates and times to be more readable
            for (let date of action.payload) {
                date.start_date = moment(date.start_date).format('dddd MMMM Do YYYY, h:mm:ss a');
                date.end_date = moment(date.end_date).format('dddd MMMM Do YYYY, h:mm:ss a');
            }
            return [...action.payload];
        default:
            return state;
    }
}

// schedule will be on the redux state at:
// state.schedule
export default schedule;
// store the list of available workouts from the database

const workout = (state = [], action) => {
    switch(action.type) {
        // return array of workouts from database
        case 'SET_WORKOUT':
            return [...action.payload];
        default:
            return state;
    }
}

// workouts will be on the redux state at:
// state.workouts
export default workout;
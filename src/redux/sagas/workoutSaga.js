import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

function* fetchWorkout() {
    try {
        // makes axios GET call to server
        const workoutResponse = yield call(axios.get, '/api/workout');
        // dispatch action to set array from database to workout reducer
        yield put({ type: 'SET_WORKOUT', payload: workoutResponse.data });
    } catch (error) {
        console.log('Error fetching workouts: ', error);
    }
}

function* workoutSaga() {
    // calls fetchWorkout when action is triggered
    yield takeLatest('FETCH_WORKOUT', fetchWorkout);
}

export default workoutSaga;
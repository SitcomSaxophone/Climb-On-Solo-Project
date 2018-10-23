import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

function* fetchWorkout() {
    try {
        const workoutResponse = yield call(axios.get, '/api/workout');
        yield put({ type: 'SET_WORKOUT', payload: workoutResponse.data });
    } catch (error) {
        console.log('Error fetching workouts: ', error);
    }
}

function* workoutSaga() {
    yield takeLatest('FETCH_WORKOUT', fetchWorkout);
}

export default workoutSaga;
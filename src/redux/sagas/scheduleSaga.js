import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

function* fetchSchedule(action) {
    try {
        const scheduleResponse = yield call(axios.get, '/api/schedule', {id: action.payload});
        yield put({ type: 'SET_SCHEDULE', payload: scheduleResponse.data });
    } catch (error) {
        console.log('Error fetching schedule: ', error);
    }
}

function* scheduleNewWorkout(action) {
    try {
        yield call(axios.post, '/api/schedule', action.payload);
        yield put({type: 'FETCH_PLANTS'});
    } catch (error ) {
        console.log('Error POSTing new schedule date: ', error);
    }
}

function* scheduleSaga() {
    yield takeLatest('FETCH_SCHEDULE', fetchSchedule);
    yield takeLatest('SCHEDULE_NEW_WORKOUT', scheduleNewWorkout);
}

export default scheduleSaga;
import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

function* fetchSchedule(action) {
    try {
        console.log(action.payload);
        const scheduleResponse = yield call(axios.get, '/api/schedule', {id: action.payload});
        yield put({ type: 'SET_SCHEDULE', payload: scheduleResponse.data });
    } catch (error) {
        console.log('Error fetching schedule: ', error);
    }
}

function* scheduleSaga() {
    yield takeLatest('FETCH_SCHEDULE', fetchSchedule);
}

export default scheduleSaga;
import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

function* fetchSchedule(action) {
    try {
        const scheduleResponse = yield call(axios.get, '/api/schedule', { id: action.payload });
        yield put({ type: 'SET_SCHEDULE', payload: scheduleResponse.data });
    } catch (error) {
        console.log('Error fetching schedule: ', error);
    }
}

function* fetchArchive(action) {
    try {
        const archiveResponse = yield call(axios.get, '/api/schedule/archive', { id: action.payload });
        yield put({ type: 'SET_ARCHIVE', payload: archiveResponse.data});
    } catch (error) {
        console.log('Error fetching archive: ', error);
    }
}

function* scheduleNewWorkout(action) {
    try {
        yield call(axios.post, '/api/schedule', action.payload);
        yield put({ type: 'FETCH_SCHEDULE' });
    } catch (error) {
        console.log('Error POSTing new schedule date: ', error);
    }
}

function* deleteScheduledWorkout(action) {
    try {
        yield call(axios.delete, '/api/schedule', { params: action.payload });
        yield put({ type: 'FETCH_SCHEDULE' });
    } catch (error) {
        console.log('Error making DELETE to server: ', error);
    }
}

function* deleteArchivedWorkout(action) {
    try {
        yield call(axios.delete, '/api/schedule', { params: action.payload});
        yield put({ type: 'FETCH_ARCHIVE'});
    } catch(error) {
        console.log('Error making DELETE to server: ', error);
    }
}

function* updateScheduledWorkout(action) {
    try {
        yield console.log(action.payload);
        yield call(axios.put, '/api/schedule', action.payload );
        yield put({ type: 'FETCH_SCHEDULE' });
    } catch (error) {
        console.log('Error making UPDATE to server: ', error);
    }
}

function* scheduleSaga() {
    yield takeLatest('FETCH_SCHEDULE', fetchSchedule);
    yield takeLatest('SCHEDULE_NEW_WORKOUT', scheduleNewWorkout);
    yield takeLatest('DELETE_WORKOUT', deleteScheduledWorkout);
    yield takeLatest('UPDATE_SCHEDULE', updateScheduledWorkout);
    yield takeLatest('FETCH_ARCHIVE', fetchArchive);
    yield takeLatest('DELETE_ARCHIVED_WORKOUT', deleteArchivedWorkout);
}

export default scheduleSaga;
import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import schedule from './scheduleReducer';
import workout from './workoutReducer';
import newSchedule from './newScheduleReducer';
import scheduleForm from './showCalendarForm';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  schedule, // contains arrays of both complete and incomplete exercises
  workout, // contains array of different workouts from the database
  newSchedule, // returns formatted dates and times to be added to the database
  scheduleForm, // returns toggle value for displaying the exercise scheduling inputs
});

export default rootReducer;

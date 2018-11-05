let showForm = false;

const scheduleForm = (state = {}, action) => {
    switch (action.type) {
        // toggle boolean value for showForm, for displaying schedule form inputs
        case 'TOGGLE_CALENDAR_FORM':
            showForm = !showForm;
            return showForm;
        default:
            return state;
    }
}

// scheduleForm will be on the redux state at:
// state.scheduleForm
export default scheduleForm;
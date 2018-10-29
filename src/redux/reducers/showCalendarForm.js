let showForm = false;

const scheduleForm = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_CALENDAR_FORM':
            showForm = !showForm;
            return showForm;
        default:
            return state;
    }
}

export default scheduleForm;
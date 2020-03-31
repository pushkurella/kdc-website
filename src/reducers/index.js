import { combineReducers } from 'redux';

// Add/edit reducers here, and change them in the combineReducers function in the export

const dummyReducer = () => {
    return [];
};

const dummyActionCreaterReducer = (dummyAC = false, action) => {
    if (action.type === 'DUMMY_AC') {
        return true;
    }
    return false;
};

export default combineReducers({
    reducer1: dummyReducer,
    reducer2: dummyActionCreaterReducer,
});

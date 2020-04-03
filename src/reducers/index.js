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

const teamInfoReducer = (teamsArray = [], action) => {
    if (action.type === 'TEAM_INFO') {
        return action.payload;
    }

    return teamsArray;
};

const alumniDescReducer = (alumniDesc = '', action) => {
    if (action.type === 'ALUMNI_DESC') {
        return action.payload;
    }
    return alumniDesc;
};

export default combineReducers({
    reducer1: dummyReducer,
    reducer2: dummyActionCreaterReducer,
    teams: teamInfoReducer,
    alumniDesc: alumniDescReducer,
});

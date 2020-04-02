// Add/edit action creators here, and export them individually
// Import with "import {dummyActionCreator} from './actions'"

import dummyAlumni from './dummyAlumni';
import dummyAlumniPageDesc from './dummyAlumniPageDesc';

export const dummyActionCreator = () => {
    return { type: 'DUMMY_AC' };
};

export const fetchTeamInfo = () => {
    const teamArray = dummyAlumni;
    return {
        type: 'TEAM_INFO',
        payload: teamArray,
    };
};

export const fetchAlumniPageDesc = () => {
    const alumniPageDesc = dummyAlumniPageDesc;
    return {
        type: 'ALUMNI_DESC',
        payload: alumniPageDesc,
    };
};

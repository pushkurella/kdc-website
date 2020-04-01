import React, { Component } from 'react';
import { fetchTeamInfo } from '../actions';
import PersonBox from './PersonBox';

export class AlumniListElement extends Component {
    render() {
        const { team } = this.props;
        if (!team) {
            return null;
        }
        return (
            <div>
                <PersonBox person={team.teamLead} />
            </div>
        );
    }
}

export default AlumniListElement;

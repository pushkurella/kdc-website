import React, { Component, Fragment } from 'react';
import PersonBox from './PersonBox';
import 'semantic-ui-css/semantic.min.css';
import '../styles/AlumniListElement.css';

export class AlumniListElement extends Component {
    _determineColumns(curPersonList) {
        const curLen = curPersonList.length;
        if (curLen < 4) {
            return (
                <div className="equal width row">
                    {curPersonList.map(curPerson => {
                        return (
                            <div className="column" key={curPerson.name}>
                                <PersonBox person={curPerson} />
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return (
                <Fragment>
                    <div className="equal width row">
                        {curPersonList.slice(0, 4).map(curPerson => {
                            return (
                                <div className="column" key={curPerson.name}>
                                    <PersonBox person={curPerson} />
                                </div>
                            );
                        })}
                    </div>
                    {this._determineColumns(curPersonList.slice(4))}
                </Fragment>
            );
        }
    }
    render() {
        const { team } = this.props;
        if (!team) {
            return null;
        }
        return (
            <div className="listBox">
                <h2 className="termHeader">{team.termName}</h2>
                <div className="ui equal width grid">
                    <div className="column">
                        <PersonBox person={team.teamLead} />
                    </div>
                    {this._determineColumns(team.team)}
                </div>
            </div>
        );
    }
}

export default AlumniListElement;

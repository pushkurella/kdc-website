import React, { Component, Fragment } from 'react';
import PersonBox from './PersonBox';
import 'semantic-ui-css/semantic.min.css';
import '../styles/AlumniListElement.css';

export class AlumniListElement extends Component {
    _determineColumns(curPersonList) {
        const curLen = curPersonList.length;
        if (curLen < 4) {
            if (curLen === 0) {
                return null;
            } else if (curLen === 1) {
                return (
                    <div className="sixteen wide column">
                        <PersonBox person={curPersonList[0]} />
                    </div>
                );
            } else if (curLen === 2) {
                return (
                    <Fragment>
                        <div className="eight wide column">
                            <PersonBox person={curPersonList[0]} />
                        </div>
                        <div className="eight wide column">
                            <PersonBox person={curPersonList[1]} />
                        </div>
                    </Fragment>
                );
            } else if (curLen === 3) {
                return (
                    <Fragment>
                        <div className="five wide column">
                            <PersonBox person={curPersonList[0]} />
                        </div>
                        <div className="six wide column">
                            <PersonBox person={curPersonList[1]} />
                        </div>
                        <div className="five wide column">
                            <PersonBox person={curPersonList[2]} />
                        </div>
                    </Fragment>
                );
            }
        } else {
            return (
                <Fragment>
                    {curPersonList.slice(0, 4).map(curPerson => {
                        return (
                            <div
                                className="four wide column"
                                key={curPerson.name}
                            >
                                <PersonBox person={curPerson} />
                            </div>
                        );
                    })}
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
                <div className="ui grid">
                    <div className="sixteen wide column">
                        <PersonBox person={team.teamLead} />
                    </div>
                    {this._determineColumns(team.team)}
                </div>
            </div>
        );
    }
}

export default AlumniListElement;

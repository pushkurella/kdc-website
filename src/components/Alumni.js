import React, { Component } from 'react';
import '../styles/Alumni.css';
import { fetchTeamInfo } from '../actions';
import AlumniListElement from './AlumniListElement';
import { connect } from 'react-redux';

export class Alumni extends Component {
    componentDidMount() {
        this.props.fetchTeamInfo();
    }
    render() {
        return (
            <div>
                <div className="mainBox">
                    <h1 className="alumniHeader">Our Alumni</h1>
                    <p className="descriptionText">
                        Since the conception of the Kitchener Development
                        Centre, there have been a plethora of talent who have
                        come and gone. Each member has always managed to leave
                        their own unique stamp on the Incubator experience. To
                        show our respect to their hard work, we have dedicated
                        this page to all of the Incubator alumni including the
                        current team members.
                    </p>
                    <button className="ui button markButton">
                        Leave Your Mark
                    </button>
                    {this.props.teams.map((team, index) => {
                        return <AlumniListElement team={team} key={index} />;
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { teams: state.teams };
};

export default connect(mapStateToProps, { fetchTeamInfo })(Alumni);

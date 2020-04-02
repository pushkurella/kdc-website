import React, { Component } from 'react';
import '../styles/Alumni.css';
import 'semantic-ui-css/semantic.min.css';
import { fetchTeamInfo, fetchAlumniPageDesc } from '../actions';
import AlumniListElement from './AlumniListElement';
import { connect } from 'react-redux';
import history from '../history';

export class Alumni extends Component {
    componentDidMount() {
        this.props.fetchTeamInfo();
        this.props.fetchAlumniPageDesc();
    }

    _linkTo = (str) => {
        history.push(str);
        window.location.reload();
    }

    render() {
        return (
            <div>
                <div className="mainBox">
                    <h1 className="alumniHeader">Our Alumni</h1>
                    <p className="descriptionText">{this.props.alumniDesc}</p>
                    <button className="ui button markButton" onClick={()=>{this._linkTo("/leaveyourmark")}}>
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
    return { teams: state.teams, alumniDesc: state.alumniDesc };
};

export default connect(mapStateToProps, { fetchTeamInfo, fetchAlumniPageDesc })(
    Alumni
);

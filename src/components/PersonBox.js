import React, { Component } from 'react';
import '../styles/PersonBox.css';
import headPic from '../assets/head-659652_1920.png';
import 'semantic-ui-css/semantic.min.css';

export class PersonBox extends Component {
    render() {
        const { person } = this.props;
        return (
            <div className="outsideBox">
                <img
                    className="ui medium circular image portrait"
                    src={headPic}
                    alt={person.name}
                />
                <h3 className="personName">{person.name}</h3>
                <h4 className="personDescription">{person.description}</h4>
            </div>
        );
    }
}

export default PersonBox;

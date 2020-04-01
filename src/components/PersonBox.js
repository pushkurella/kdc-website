import React, { Component } from 'react';
import '../styles/PersonBox.css';

export class PersonBox extends Component {
    render() {
        const { person } = this.props;
        console.log(person);
        return (
            <div className="outsideBox">
                <div
                    style={{
                        height: '70px',
                        width: '70px',
                        margin: 'auto',
                        border: '3px solid black',
                    }}
                >
                    {person.picture}
                </div>
                <div>{person.name}</div>
                <div>{person.description}</div>
            </div>
        );
    }
}

export default PersonBox;

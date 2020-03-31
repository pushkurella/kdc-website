import React, { Component } from 'react';
import '../styles/Alumni.css';

export class Alumni extends Component {
    render() {
        return (
            <div>
                {/* header */}
                <div style={{ height: '50px' }}> Hello!</div>
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
                </div>
            </div>
        );
    }
}

export default Alumni;

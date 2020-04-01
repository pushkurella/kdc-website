import React from 'react';
import NewSlider from './newSlider';
import Info from './Tab';
import './Events.css';

class EventsPage extends React.Component {
    render () {
        return (
            <div className="Events">
                <div className="Title">
                    <h1>Events at the KDC</h1>
                </div>
                <div>
                    <NewSlider />
                </div>
                <div>
                    <Info />
                </div>
            </div>
        );
    };
};

export default EventsPage;
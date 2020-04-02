import React from 'react';
import ImageSlider from './Slider';
import Info from './Tab';
import './Events.css';

class EventsPage extends React.Component {
    render () {
        return (
            <div className="Page">
                <div className="Events">
                    <div>
                        <h1 className="Title" center>Events at the KDC</h1>
                    </div>
                    <div>
                        <ImageSlider />
                    </div>
                    <div>
                        <Info />
                    </div>
                </div>
            </div>
        );
    };
};

export default EventsPage;
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.438189,
      lng: -80.477937
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '35vh', width: '80vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCSpif8-39Cj9NyPq-_m2aZtafrLm5REwA'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={43.438189}
            lng={-80.477937}
            text="Cooperators Development Center"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
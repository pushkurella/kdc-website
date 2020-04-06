import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const Update = ({ text }) => <div>{text}</div>;
const cooperatorsLat = 43.438189;
const cooperatorsLong = -80.477937;
const googleMapsApiKey ='AIzaSyCSpif8-39Cj9NyPq-_m2aZtafrLm5REwA';
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: cooperatorsLat,
      lng: cooperatorsLong
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '35vh', width: '75vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsApiKey}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Update
            lat={cooperatorsLat}
            lng={cooperatorsLong}
            text="Cooperators Development Center"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
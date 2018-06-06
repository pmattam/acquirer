import React, { PureComponent } from 'react';
import MapComponent from './Map';

class ProfileMap extends PureComponent {
  state = {
    isMarkerShown: true,
    lat: 33.9632246,
    lng: -84.22104969999999
  }

  componentDidMount() {
    this.getCoordinates();
  }

  getCoordinates = () => {
    let address = this.props.address;
    console.log("address", address);
    let geoURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBey-Jk8GDEo92I0MCHSdmMUQ0Jja0foYo`;
      fetch(geoURL, {method: 'GET'})
        .then(res  => { 
          try {
            if(res.ok) return res.json();
            if(res.status >= 400 && res.status < 500 ) return Promise.reject({ body: res, status: res.status, type: 'Application Error'});
            if(res.status >= 500) return Promise.reject({ body: res, status: res.status, type: 'Server Error' });
          } catch (e) {
            console.log(e);
            Promise.reject({ body: res, status: res.status, type:'Invalid JSON'})
          }
        })
        .then(data => data.results[0])
        .then(data => this.setState({ lat: data.geometry.location.lat, lng: data.geometry.location.lng}))
  };

  // handleMarkerClick = () => {
  //   this.setState({ isMarkerShown: false })
  // };

  render() {
    return (
      <MapComponent
        isMarkerShown={this.state.isMarkerShown}
        // onMarkerClick={this.handleMarkerClick}
        lat={this.state.lat}
        lng={this.state.lng}
      />
    )
  }
}

export default ProfileMap;

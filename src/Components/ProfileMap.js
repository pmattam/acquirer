import React, { PureComponent } from 'react';
import MapComponent from './Map';
import { getLatAndLng } from '../Lib/index';

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
    getLatAndLng(this.props.address)
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

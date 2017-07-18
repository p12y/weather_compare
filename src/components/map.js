import React, {Component} from 'react';

class Map extends Component {
  componentDidMount() {
    new window.google.maps.Map(this.refs.map, {
      zoom: 11,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
  }

  render() {
    return (
      <div className={'panel panel-default'}>
        <div className="panel-heading">
          <h4 className="panel-title">City</h4>
        </div>
        <div className="panel-body">
          <div ref="map" style={{width: '100%', height: '150px'}}>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
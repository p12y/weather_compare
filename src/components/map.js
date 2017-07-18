import React, {Component} from 'react';
import GoogleMap from 'google-map-react';

class Map extends Component {
  render() {
    return (
      <div className={'panel panel-default'}>
        <div className="panel-heading">
          <h4 className="panel-title">City</h4>
        </div>
        <div className="panel-body">
          <div style={{width: '100%', height: '150px'}}>
            <GoogleMap
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
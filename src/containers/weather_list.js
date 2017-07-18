import React, {Component} from 'react';
import {OWM_API_KEY} from '../config.js';
import axios from 'axios';
import Chart from '../components/chart';
import Map from '../components/map';
import {connect} from 'react-redux';

class WeatherList extends Component {
  render() {
    if (this.state.data) {
      const temps = this.state.data.list.map(item => item.main.temp);
      const humidities = this.state.data.list.map(item => item.main.humidity);
      const pressures = this.state.data.list.map(item => item.main.pressure);
      const lat = this.state.data.city.coord.lat;
      const lng = this.state.data.city.coord.lon;

      return (
        <div className="row weather">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="col-md-3">
                <Map center={{lat, lng}} zoom={11}  />
              </div>
              <div className="col-md-3">
                <Chart color="red" data={temps} type="Temperature" panelClass="danger" />
              </div>
              <div className="col-md-3">
                <Chart color="blue" data={humidities} type="Humidity" panelClass="primary" />
              </div>
              <div className="col-md-3">
                <Chart color="green" data={pressures} type="Pressure" panelClass="success" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  return <div>Loading...</div>
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
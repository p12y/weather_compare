import React, {Component} from 'react';
import Chart from '../components/chart';
import Map from '../components/map';
import {connect} from 'react-redux';

class WeatherList extends Component {
  renderWeather({list, city}) {
    const temps = list.map(item => item.main.temp);
    const humidities = list.map(item => item.main.humidity);
    const pressures = list.map(item => item.main.pressure);
    const lat = city.coord.lat;
    const lng = city.coord.lon;

    return (
      <div key={`${city.name}-${Math.random(1, 4)}`} className="row weather">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="col-md-3">
              <Map center={{lat, lng}} zoom={11}  />
            </div>

            <div className="col-md-3">
              <Chart 
                color="red" 
                data={temps} 
                type="Temperature" 
                panelClass="danger"
                unit="°C" 
              />
            </div>

            <div className="col-md-3">
              <Chart 
                color="blue" 
                data={humidities} 
                type="Humidity" 
                panelClass="primary"
                unit="%" 
              />
            </div>

            <div className="col-md-3">
              <Chart 
                color="green" 
                data={pressures} 
                type="Pressure" 
                panelClass="success" 
                unit="hPa"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.weather.map(this.renderWeather)}
      </div>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
import React, {Component} from 'react';
import {OWM_API_KEY} from '../config.js';
import axios from 'axios';
import Chart from '../components/chart';
import Map from '../components/map';

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  componentDidMount() {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&units=metric&appid=${OWM_API_KEY}`;
    axios.get(url).then((res) => {
      this.setState({data: res.data});
      console.log(res.data);
    });
  }

  render() {
    if (this.state.data) {
      const temps = this.state.data.list.map(item => item.main.temp);
      const humidities = this.state.data.list.map(item => item.main.humidity);
      const pressures = this.state.data.list.map(item => item.main.pressure);

      return (
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="col-md-3">
                <Map city={this.state.data.city.name} />
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

export default WeatherList;
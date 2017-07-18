import React, {Component} from 'react';
import {OWM_API_KEY} from '../config.js';
import axios from 'axios';

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&units=metric&appid=${OWM_API_KEY}`;
    axios.get(url).then(res => this.setState({data: res.data}));
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default WeatherList;
import axios from 'axios';
import {OWM_API_KEY} from '../config.js';

export function getWeather() {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&units=metric&appid=${OWM_API_KEY}`;
  const request = axios.get(url);
  console.log('get weather', request)
  return {
    type: 'GET_WEATHER',
    payload: request
  };
}
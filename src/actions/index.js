import axios from 'axios';
import {OWM_API_KEY} from '../config.js';

export function getWeather({city, country}) {
  const url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&mode=json&units=metric&appid=${OWM_API_KEY}`;
  const request = axios.get(url);
  if (!city) {
    return {
      type: 'STOP_SEARCH'
    }
  }
  return {
    type: 'GET_WEATHER',
    payload: request
  };
}
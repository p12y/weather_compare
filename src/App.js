import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="page-header">
          <h3>Weather Compare<br/><small>Compare the weather in your favourite cities</small></h3>
        </div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;

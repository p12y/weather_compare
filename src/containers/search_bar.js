import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {country: "uk", city: ""}

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getWeather({city: "London", country: this.state.country});
  }

  handleFormSubmit(event) {
    event.preventDefault();

    this.props.getWeather({city: this.state.city, country: this.state.country})
  }

  handleInputChange(event) {
    const city = event.target.value;
    this.setState({city});
  }

  handleSelectChange(event) {
    const country = event.target.value;
    this.setState({country});
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.handleFormSubmit}>
            <select onChange={this.handleSelectChange} className="form-control">
              <option value="uk">United Kingdom</option>
              <option value="us">United States</option>
              <option value="fr">France</option>
              <option value="sp">Spain</option>
            </select>

            <div className="input-group">
              <input 
                placeholder="Enter a city for a five-day forecast..."
                className="form-control"
                value={this.state.city}
                onChange={this.handleInputChange}
              />

              <span className="input-group-btn">
                <button type="submit" className="btn btn-primary">Submit</button>
              </span>
            </div>
          </form> 
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
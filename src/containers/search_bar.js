import React, {Component} from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form>
            <select className="form-control">
              <option value="uk">United Kingdom</option>
              <option value="us">United States</option>
              <option value="fr">France</option>
              <option value="sp">Spain</option>
            </select>

            <div className="input-group">
              <input 
                placeholder="Enter a city for a five-day forecast..."
                className="form-control"
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
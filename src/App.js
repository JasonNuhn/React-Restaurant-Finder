import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import GeoLocation from './components/GeoLocation';
import RestaurantContainer from './components/RestaurantContainer';


class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      query: 'pizza',
    };
  }
  render() {
    return (
      <div className="App">
				<Header />
        <div className="container">
					<div className="row">
						<div className="col-sm-7 col-xs-12">
							<GeoLocation />
      			</div>
						<div className="col-sm-5 col-xs-12">
      				<RestaurantContainer query={this.state.query}/>
      			</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

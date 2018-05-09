import React, { Component } from 'react';
import Gallery from './Gallery.js';
import sauceInventory from '../hotsauces.json';
import '../css/App.css';

class App extends Component {

   // load our sauces into state
  constructor(props) {
    super(props);
    this.state = {sauces: sauceInventory.list};
  } 
 
  // set up our function to remove sauces from grid
  removeSauce = key => {
    // retrieve state
    const sauces = { ...this.state.sauces};
    // delete selected sauce
    delete sauces[key];
    // reset state
    this.setState({ sauces });
  }


  render() {
    return (

      <div className="page gallery">
      	<h1 className="page-title"><span className="small one">The</span> <span className="two">Hot</span> <span className="three">Sauce</span> <span className="small four">List</span></h1>
      	<div className="grid">
          {Object.keys(this.state.sauces).map(key => 
            <Gallery 
              key={key} 
              index={key} 
              details={this.state.sauces[key]} 
              removeSauce={this.removeSauce}
              />
          )}
      	</div>
      </div>
    );
  }

}

export default App;


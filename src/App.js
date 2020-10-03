import React, { Component } from 'react';


import './App.css';

import FeatureList from './Feature-List';
import Summary from './Summary';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    // const summary = Object.keys(this.state.selected).map((feature, idx) => {
    //   const featureHash = feature + '-' + idx;
    //   const selectedOption = this.state.selected[feature];
    //   return <SummaryItem 
    //   USCurrencyFormat={USCurrencyFormat} 
    //   feature={feature}
    //   featureHash={featureHash} 
    //   selectedOption={selectedOption} 
    //   />
    // });

    // const total = Object.keys(this.state.selected).reduce(
    //   (acc, curr) => acc + this.state.selected[curr].cost,
    //   0
    // );

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <FeatureList 
              features={this.props.features} 
              updateFeature={this.updateFeature} 
              state={this.state} 
              USCurrencyFormat={USCurrencyFormat}
            />
          </form>
          <Summary 
            USCurrencyFormat={USCurrencyFormat}
            state={this.state}
          />
          {/* <section className="main__summary">
            <h2>Your cart</h2>
            <SummarySelected 
              USCurrencyFormat={USCurrencyFormat} 
              state={this.state}
            />
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                <SummaryTotal 
                  USCurrencyFormat={USCurrencyFormat}
                  state={this.state}
                />
              </div>
            </div>
          </section> */}
        </main>
      </div>
    );
  }
}

export default App;

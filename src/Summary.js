import React from 'react';
import SummarySelected from './Summary-Selected';
import SummaryTotal from './Summary-Total';

export default function Summary(props) {
  return (<section className="main__summary">
  <h2>Your cart</h2>
  <SummarySelected 
    USCurrencyFormat={props.USCurrencyFormat} 
    state={props.state}
  />
  <div className="summary__total">
    <div className="summary__total__label">Total</div>
    <div className="summary__total__value">
      <SummaryTotal 
        USCurrencyFormat={props.USCurrencyFormat}
        state={props.state}
      />
    </div>
  </div>
</section>)
}